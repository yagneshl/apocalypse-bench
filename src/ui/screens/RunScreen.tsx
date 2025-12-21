import { useEffect, useMemo, useState } from 'react';
import { Box, Text } from 'ink';
import type { RunnerEvent } from '../../core/runner/orchestrator';
import { LogsPanel } from '../components/LogsPanel';
import { formatDuration, formatEventSummary, formatNumber, formatUsd } from '../format';
import { computeUiStats } from '../uiStats';
import { ModelStatsTable } from '../components/ModelStatsTable';

function GlobalProgressBar(props: { progress: number; width: number }) {
  const { progress, width } = props;
  const filled = Math.round(progress * width);
  const empty = Math.max(0, width - filled);
  return (
    <Text>
      {'█'.repeat(filled)}
      {'░'.repeat(empty)}
    </Text>
  );
}

export function RunScreen(props: {
  events: RunnerEvent[];
  totals?: import('../uiStats').UiTotals;
  showLogs: boolean;
  totalQuestions: number;
  questionsPerModel: number;
  modelCount: number;
}) {
  const [nowMs, setNowMs] = useState(() => Date.now());

  useEffect(() => {
    const t = setInterval(() => setNowMs(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const stats = useMemo(
    () =>
      computeUiStats({
        events: props.events,
        totals: props.totals,
        totalQuestions: props.totalQuestions,
        questionsPerModel: props.questionsPerModel,
        modelCount: props.modelCount,
      }),
    [
      props.events,
      props.totals,
      props.totalQuestions,
      props.questionsPerModel,
      props.modelCount,
    ],
  );

  const elapsedMs =
    stats.startedAtMs == null ? 0 : Math.max(0, nowMs - stats.startedAtMs);

  const doneTotal = stats.completedCount + stats.failedCount;
  const progressPct = stats.progress == null ? 0 : Math.round(stats.progress * 100);
  const totalTokens = stats.models.reduce(
    (sum, m) => sum + (m.usage?.totalTokens ?? 0),
    0,
  );
  const candidateCostUsd = stats.models.reduce((sum, m) => sum + (m.costUsd ?? 0), 0);
  // Use candidate cost for the main "cost" display so it stays consistent with the per-model table.
  // budget_spent includes in-flight spend which can make the header look much higher mid-run.
  const totalCostUsd = candidateCostUsd;
  const judgeCostUsdRaw =
    stats.budgetSpentJudgeUsd != null && stats.budgetSpentCandidateUsd != null
      ? stats.budgetSpentUsd == null
        ? null
        : Math.max(0, stats.budgetSpentUsd - stats.budgetSpentCandidateUsd)
      : null;
  const judgeCostUsd =
    judgeCostUsdRaw == null
      ? null
      : Math.abs(judgeCostUsdRaw) < 1e-6
        ? 0
        : Math.max(0, judgeCostUsdRaw);

  return (
    <Box flexDirection="column" paddingX={1}>
      {/* Header */}
      <Box gap={2}>
        <Text bold>apocbench</Text>
        <Text dimColor>run:</Text>
        <Text>{stats.runId ?? 'starting…'}</Text>
        <Text dimColor>elapsed:</Text>
        <Text>{formatDuration(elapsedMs)}</Text>
      </Box>

      {/* Global stats bar */}
      <Box marginTop={1} gap={2}>
        <Box gap={1}>
          <GlobalProgressBar progress={stats.progress ?? 0} width={20} />
          <Text>{progressPct}%</Text>
        </Box>
        <Text dimColor>|</Text>
        <Text>
          <Text dimColor>done:</Text> {doneTotal}/{stats.totalQuestions}
        </Text>
        <Text dimColor>|</Text>
        <Text>
          <Text dimColor>score:</Text>{' '}
          {stats.runningScoreMean == null ? '—' : formatNumber(stats.runningScoreMean, 2)}
        </Text>
        <Text dimColor>|</Text>
        <Text>
          <Text dimColor>tokens:</Text> {formatNumber(totalTokens, 0)}
        </Text>
        <Text dimColor>|</Text>
        <Text>
          <Text dimColor>cost:</Text> {formatUsd(totalCostUsd)}
          {judgeCostUsd != null ? ` (judge: ${formatUsd(judgeCostUsd)})` : ''}
        </Text>
        {stats.budgetMaxUsd != null ? (
          <>
            <Text dimColor>|</Text>
            <Text>
              <Text dimColor>budget:</Text> {formatUsd(stats.budgetSpentUsd ?? 0)}/
              {formatUsd(stats.budgetMaxUsd)}
            </Text>
          </>
        ) : null}
      </Box>

      {/* Model table with per-model progress */}
      <Box marginTop={1} flexDirection="column" borderStyle="round" paddingX={1}>
        <Text bold>models</Text>
        <ModelStatsTable stats={stats} />
      </Box>

      {/* Footer */}
      <Box marginTop={1} gap={2}>
        <Text dimColor>q=quit l=logs</Text>
        <Text dimColor>|</Text>
        <Text dimColor>last:</Text>
        <Text>{stats.lastEvent ? formatEventSummary(stats.lastEvent) : '…'}</Text>
      </Box>

      {props.showLogs ? (
        <Box flexDirection="column" marginTop={1}>
          <LogsPanel events={props.events} />
        </Box>
      ) : null}
    </Box>
  );
}
