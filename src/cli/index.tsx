#!/usr/bin/env node
import 'dotenv/config';
import { buildApplication, buildCommand, buildRouteMap, numberParser, run } from '@stricli/core';

import { createOpenRouterClient } from '../adapters/openrouter/client';
import { createOllamaClient } from '../adapters/ollama/client';
import { loadConfig } from '../core/config/loadConfig';
import type { ApocbenchConfig } from '../core/config/schema';
import { loadJsonl } from '../core/dataset/loadJsonl';
import type { RunnerEvent } from '../core/runner/orchestrator';
import { runBenchmark } from '../core/runner/orchestrator';
import { diffSummaries, type RunSummary } from '../core/scoring/diff';
import { renderHtmlReport } from '../reports/html/renderHtml';
import { openAndMigrate } from '../storage/sqlite/migrate';
import { listRunModelResults } from '../storage/sqlite/queries';
import { App } from '../ui/App';

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { render } from 'ink';

type CliContext = {
  process: NodeJS.Process;
};

function readToolVersion(): string {
  let dir = path.dirname(fileURLToPath(import.meta.url));
  for (;;) {
    const pkgPath = path.join(dir, 'package.json');
    if (fs.existsSync(pkgPath)) {
      try {
        const parsed = JSON.parse(fs.readFileSync(pkgPath, 'utf8')) as { version?: unknown } | null;
        if (parsed && typeof parsed.version === 'string' && parsed.version.length > 0) {
          return parsed.version;
        }
      } catch {
        // ignore and fall through
      }
    }

    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }

  return 'unknown';
}

const TOOL_VERSION = readToolVersion();

function die(msg: string): never {
  console.error(msg);
  process.exit(1);
}

type RunFlags = {
  config: string;
  dryRun?: boolean;
  quiet?: boolean;
  json?: boolean;
  limit?: number;
  categories?: readonly string[];
  models?: readonly string[];
};

async function runCommand(
  this: CliContext,
  flags: RunFlags,
  runId?: string,
  forceResume = false,
): Promise<void | Error> {
  const { config: loadedConfig } = loadConfig(flags.config);
  const config: ApocbenchConfig = forceResume
    ? { ...loadedConfig, run: { ...loadedConfig.run, resume: true } }
    : loadedConfig;
  const dataset = loadJsonl(config.run.datasetPath);

  const events: RunnerEvent[] = [];

  const resolveModel = (m: ApocbenchConfig['models'][number]) => {
    if (m.router === 'openrouter') {
      const apiKey = process.env[config.routers.openrouter.apiKeyEnv];
      if (!apiKey) die(`missing env var: ${config.routers.openrouter.apiKeyEnv}`);
      const openrouter = createOpenRouterClient({
        apiKey,
        baseUrl: config.routers.openrouter.baseUrl,
        headers: config.routers.openrouter.headers,
      });
      return openrouter(m.model);
    }

    const ollama = createOllamaClient({ baseUrl: config.routers.ollama.baseUrl });
    return ollama(m.model);
  };

  const resolveJudgeModel = () => {
    const apiKey = process.env[config.routers.openrouter.apiKeyEnv];
    if (!apiKey) die(`missing env var: ${config.routers.openrouter.apiKeyEnv}`);
    const openrouter = createOpenRouterClient({
      apiKey,
      baseUrl: config.routers.openrouter.baseUrl,
      headers: config.routers.openrouter.headers,
    });
    return openrouter(config.judge.model);
  };

  const runPromise = runBenchmark({
    config,
    configPath: flags.config,
    datasetPath: config.run.datasetPath,
    datasetAbsolutePath: dataset.absolutePath,
    questions: dataset.lines,
    deps: { resolveModel, resolveJudgeModel, toolVersion: TOOL_VERSION },
    dryRun: flags.dryRun ?? false,
    runIdOverride: runId,
    forceResume: forceResume ? true : undefined,
    selectedModelIds: flags.models ? Array.from(flags.models) : undefined,
    limitOverride: typeof flags.limit === 'number' ? flags.limit : null,
    categoriesOverride: flags.categories ? Array.from(flags.categories) : null,
    onEvent: e => {
      events.push(e);
      if (flags.json) process.stdout.write(JSON.stringify(e) + '\n');
    },
  });

  if (flags.quiet || flags.json) {
    const r = await runPromise;
    if (r && flags.json) process.stdout.write(JSON.stringify(r) + '\n');
    return;
  }

  render(<App runPromise={runPromise} events={events} />);
}

type ValidateFlags = {
  config: string;
  quiet?: boolean;
};

async function validateCommand(this: CliContext, flags: ValidateFlags): Promise<void> {
  const { config } = loadConfig(flags.config);
  const dataset = loadJsonl(config.run.datasetPath);
  if (!flags.quiet) console.log(`config ok; dataset ok (${dataset.lines.length} questions)`);
}

type ReportFlags = {
  outDir?: string;
};

async function reportCommand(this: CliContext, flags: ReportFlags, runId: string): Promise<void> {
  const outDir = flags.outDir ?? './runs';
  const db = openAndMigrate(path.resolve(process.cwd(), outDir, 'apocbench.sqlite'));
  const rows = listRunModelResults(db, runId);
  const byModel = new Map<string, { overallScore: number; autoFailCount: number }>();
  for (const r of rows) {
    const model = byModel.get(r.model_id) ?? { overallScore: 0, autoFailCount: 0 };
    if (r.status === 'done' && typeof r.score_overall === 'number') model.overallScore += r.score_overall;
    if (r.auto_fail === 1) model.autoFailCount += 1;
    byModel.set(r.model_id, model);
  }
  const summary = {
    runId,
    models: Array.from(byModel.entries()).map(([modelId, m]) => ({
      modelId,
      overallScore: m.overallScore,
      autoFailCount: m.autoFailCount,
    })),
  } satisfies RunSummary;

  const runDir = path.resolve(process.cwd(), outDir, runId);
  fs.mkdirSync(runDir, { recursive: true });
  fs.writeFileSync(path.join(runDir, 'summary.json'), JSON.stringify(summary, null, 2));
  fs.writeFileSync(path.join(runDir, 'report.html'), renderHtmlReport({ runId, summaryJson: summary }));
  console.log(JSON.stringify(summary, null, 2));
}

type DiffFlags = {
  outDir?: string;
};

async function diffCommand(
  this: CliContext,
  flags: DiffFlags,
  runId1: string,
  runId2: string,
): Promise<void> {
  const outDir = flags.outDir ?? './runs';
  const db = openAndMigrate(path.resolve(process.cwd(), outDir, 'apocbench.sqlite'));

  const toSummary = (runId: string): RunSummary => {
    const rows = listRunModelResults(db, runId);
    const byModel = new Map<string, { overallScore: number; autoFailCount: number }>();
    for (const r of rows) {
      const model = byModel.get(r.model_id) ?? { overallScore: 0, autoFailCount: 0 };
      if (r.status === 'done' && typeof r.score_overall === 'number') model.overallScore += r.score_overall;
      if (r.auto_fail === 1) model.autoFailCount += 1;
      byModel.set(r.model_id, model);
    }
    return {
      runId,
      models: Array.from(byModel.entries()).map(([modelId, m]) => ({
        modelId,
        overallScore: m.overallScore,
        autoFailCount: m.autoFailCount,
      })),
    };
  };

  console.log(JSON.stringify(diffSummaries(toSummary(runId1), toSummary(runId2)), null, 2));
}

type ResumeFlags = RunFlags;

async function resumeCommand(
  this: CliContext,
  flags: ResumeFlags,
  runId: string,
): Promise<void | Error> {
  console.log(`resuming run ${runId}`);
  return runCommand.call(this, flags, runId, true);
}

const root = buildRouteMap({
  routes: {
    run: buildCommand<RunFlags, [runId?: string], CliContext>({
      docs: {
        brief: 'Run benchmark',
        customUsage: [
          'run -c apocbench.yml [--dry-run] [--json] [--quiet] [--limit N] [--categories a,b]',
          'run <runId> -c apocbench.yml  # resume by runId',
        ],
      },
      parameters: {
        flags: {
          config: { kind: 'parsed', brief: 'Path to apocbench.yml', parse: s => s },
          dryRun: { kind: 'boolean', brief: 'Validate only (no API calls)', optional: true },
          quiet: { kind: 'boolean', brief: 'Suppress TUI output', optional: true },
          json: { kind: 'boolean', brief: 'Emit JSONL events', optional: true },
          limit: { kind: 'parsed', brief: 'Limit questions', optional: true, parse: numberParser },
          categories: {
            kind: 'parsed',
            brief: 'Comma-separated categories',
            optional: true,
            variadic: ',',
            parse: s => s,
          },
          models: {
            kind: 'parsed',
            brief: 'Comma-separated model ids to run (matches config models[].id)',
            optional: true,
            variadic: ',',
            parse: s => s,
          },
        },
        aliases: {
          c: 'config',
        },
        positional: {
          kind: 'tuple',
          parameters: [
            {
              brief: 'Optional run id to resume',
              optional: true,
              parse: s => s,
              placeholder: 'runId',
            },
          ],
        },
      },
      func: runCommand,
    }),
    validate: buildCommand<ValidateFlags, [], CliContext>({
      docs: { brief: 'Validate config and dataset' },
      parameters: {
        flags: {
          config: { kind: 'parsed', brief: 'Path to apocbench.yml', parse: s => s },
          quiet: { kind: 'boolean', brief: 'Suppress output', optional: true },
        },
        aliases: { c: 'config' },
      },
      func: validateCommand,
    }),
    report: buildCommand<ReportFlags, [runId: string], CliContext>({
      docs: { brief: 'Generate run summary and HTML report' },
      parameters: {
        flags: {
          outDir: {
            kind: 'parsed',
            brief: 'Output directory (defaults to ./runs)',
            optional: true,
            parse: s => s,
          },
        },
        positional: {
          kind: 'tuple',
          parameters: [
            {
              brief: 'Run id',
              parse: s => s,
              placeholder: 'runId',
            },
          ],
        },
      },
      func: reportCommand,
    }),
    diff: buildCommand<DiffFlags, [runId1: string, runId2: string], CliContext>({
      docs: { brief: 'Diff two runs' },
      parameters: {
        flags: {
          outDir: {
            kind: 'parsed',
            brief: 'Output directory (defaults to ./runs)',
            optional: true,
            parse: s => s,
          },
        },
        positional: {
          kind: 'tuple',
          parameters: [
            { brief: 'Run id 1', parse: s => s, placeholder: 'runId1' },
            { brief: 'Run id 2', parse: s => s, placeholder: 'runId2' },
          ],
        },
      },
      func: diffCommand,
    }),
    resume: buildCommand<ResumeFlags, [runId: string], CliContext>({
      docs: { brief: 'Resume a run by id (alias of run)' },
      parameters: {
        flags: {
          config: { kind: 'parsed', brief: 'Path to apocbench.yml', parse: s => s },
          dryRun: { kind: 'boolean', brief: 'Validate only (no API calls)', optional: true },
          quiet: { kind: 'boolean', brief: 'Suppress TUI output', optional: true },
          json: { kind: 'boolean', brief: 'Emit JSONL events', optional: true },
          limit: { kind: 'parsed', brief: 'Limit questions', optional: true, parse: numberParser },
          categories: {
            kind: 'parsed',
            brief: 'Comma-separated categories',
            optional: true,
            variadic: ',',
            parse: s => s,
          },
          models: {
            kind: 'parsed',
            brief: 'Comma-separated model ids to run (matches config models[].id)',
            optional: true,
            variadic: ',',
            parse: s => s,
          },
        },
        aliases: { c: 'config' },
        positional: {
          kind: 'tuple',
          parameters: [{ brief: 'Run id', parse: s => s, placeholder: 'runId' }],
        },
      },
      func: resumeCommand,
    }),
  },
  docs: { brief: 'apocbench: offline survival/apocalypse LLM benchmark runner' },
});

const app = buildApplication<CliContext>(root, {
  name: 'apocbench',
  scanner: { caseStyle: 'allow-kebab-for-camel', allowArgumentEscapeSequence: true },
});

await run(app, process.argv.slice(2), { process });
