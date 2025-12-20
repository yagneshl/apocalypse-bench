import React from 'react';
import { Box, Text } from 'ink';
import type { UiStats } from '../uiStats';
import { formatDuration, formatNumber, formatUsd } from '../format';

export function StatsPanel(props: { stats: UiStats }) {
  const { stats } = props;

  const doneTotal = stats.completedCount + stats.failedCount;
  const progressPct = stats.progress == null ? '—' : `${Math.round(stats.progress * 100)}%`;

  const totalTokens = stats.models.reduce((sum, m) => sum + (m.usage?.totalTokens ?? 0), 0);
  const promptTokens = stats.models.reduce((sum, m) => sum + (m.usage?.promptTokens ?? 0), 0);
  const completionTokens = stats.models.reduce((sum, m) => sum + (m.usage?.completionTokens ?? 0), 0);
  const totalCostUsd = stats.models.reduce((sum, m) => sum + (m.costUsd ?? 0), 0);

  const tokensPerSec = stats.lastTps;

  return (
    <Box flexDirection="column" borderStyle="round" paddingX={1} paddingY={0}>
      <Text bold>stats</Text>
      <Text>
        progress: {doneTotal}/{stats.totalQuestions} ({progressPct})
      </Text>
      <Text>
        done: {stats.completedCount}  failed: {stats.failedCount}  score: {stats.runningScoreMean == null ? '—' : formatNumber(stats.runningScoreMean, 2)}
      </Text>
      <Text>time: {formatDuration(stats.elapsedMs)}</Text>
      <Text>
        tokens: {totalTokens} (p:{promptTokens} c:{completionTokens})  tps:{tokensPerSec == null ? (stats.hasOpenRouterGenerationId ? 'fetching…' : 'not available') : formatNumber(tokensPerSec, 1)}
      </Text>
      <Text>cost: {formatUsd(totalCostUsd)}</Text>
      {stats.budgetMaxUsd != null ? (
        <Text>
          budget: {formatUsd(stats.budgetSpentUsd ?? 0)} / {formatUsd(stats.budgetMaxUsd)}
        </Text>
      ) : null}
    </Box>
  );
}
