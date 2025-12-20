import React from 'react';
import { Box, Text } from 'ink';
import type { RunnerEvent } from '../../core/runner/orchestrator';
import { LogsPanel } from '../components/LogsPanel';
import { formatDuration, formatEventSummary } from '../format';
import { computeUiStats } from '../uiStats';
import { ModelStatsTable } from '../components/ModelStatsTable';
import { ProgressPanel } from '../components/ProgressPanel';
import { StatsPanel } from '../components/StatsPanel';

export function RunScreen(props: {
  events: RunnerEvent[];
  showLogs: boolean;
  totalQuestions: number;
}) {
  const [nowMs, setNowMs] = React.useState(() => Date.now());

  React.useEffect(() => {
    const t = setInterval(() => setNowMs(Date.now()), 250);
    return () => clearInterval(t);
  }, []);

  const stats = computeUiStats({
    events: props.events,
    totalQuestions: props.totalQuestions,
    nowMs,
  });

  return (
    <Box flexDirection="column" paddingX={1}>
      <Box>
        <Text bold>apocbench</Text>
        <Text>  run: {stats.runId ?? 'starting…'}</Text>
        <Text>  elapsed: {formatDuration(stats.elapsedMs)}</Text>
      </Box>

      <Box marginTop={1} gap={2}>
        <Box flexDirection="column" gap={1}>
          <ProgressPanel stats={stats} width={44} />
          <StatsPanel stats={stats} />
        </Box>
        <Box flexGrow={1}>
          <ModelStatsTable stats={stats} />
        </Box>
      </Box>

      <Box marginTop={1}>
        <Text>controls: l=logs q=quit</Text>
        <Text>
          {'  '}last: {stats.lastEvent ? formatEventSummary(stats.lastEvent) : '…'}
        </Text>
      </Box>

      {props.showLogs ? (
        <Box flexDirection="column" marginTop={1}>
          <LogsPanel events={props.events} />
        </Box>
      ) : null}
    </Box>
  );
}

