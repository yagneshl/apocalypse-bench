import React from 'react';
import { Box, Text } from 'ink';
import type { UiStats } from '../uiStats';
import { formatDuration, formatNumber, formatUsd } from '../format';

export function SummaryScreen(props: {
  result: { runId: string; outDir: string; summaryPath: string; reportPath: string };
  stats: UiStats;
}) {
  const stats = props.stats;
  const elapsedMs = stats.startedAtMs == null ? null : 0;
  const doneTotal = stats.completedCount + stats.failedCount;
  const totalTokens = stats.models.reduce((sum, m) => sum + (m.usage?.totalTokens ?? 0), 0);
  const candidateCostUsd = stats.models.reduce((sum, m) => sum + (m.costUsd ?? 0), 0);
  const totalCostUsd = stats.budgetSpentUsd ?? candidateCostUsd;
  const judgeCostUsd =
    stats.budgetSpentUsd != null
      ? Math.max(0, totalCostUsd - candidateCostUsd)
      : null;
  const topModels = [...stats.models]
    .filter((m) => m.scoreMean != null)
    .sort((a, b) => (b.scoreMean ?? 0) - (a.scoreMean ?? 0))
    .slice(0, 3);

  return (
    <Box flexDirection="column" paddingX={1}>
      <Text bold>completed</Text>
      <Text>runId: {props.result.runId}</Text>
      <Text>outDir: {props.result.outDir}</Text>
      <Text>summary: {props.result.summaryPath}</Text>
      <Text>report: {props.result.reportPath}</Text>
      <Text>
        done: {doneTotal}/{stats.totalQuestions}
        {stats.runningScoreMean == null
          ? ''
          : `  avg score: ${formatNumber(stats.runningScoreMean, 2)}`}
        {elapsedMs == null ? '' : `  elapsed: ${formatDuration(elapsedMs)}`}
      </Text>
      <Text>
        tokens: {formatNumber(totalTokens, 0)}  cost: {formatUsd(totalCostUsd)}
        {judgeCostUsd != null ? ` (judge: ${formatUsd(judgeCostUsd)})` : ''}
        {stats.budgetMaxUsd != null
          ? `  budget: ${formatUsd(stats.budgetSpentUsd ?? 0)}/${formatUsd(stats.budgetMaxUsd)}`
          : ''}
      </Text>
      {topModels.length > 0 ? (
        <Text>
          top: {topModels
            .map((m) => `${m.modelId} ${formatNumber(m.scoreMean ?? 0, 2)}`)
            .join('  ')}
        </Text>
      ) : null}
      <Text>press q to quit</Text>
    </Box>
  );
}
