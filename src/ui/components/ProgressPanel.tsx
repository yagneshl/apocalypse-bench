import React from 'react';
import { Box, Text } from 'ink';
import type { UiStats } from '../uiStats';

function clamp01(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.min(1, Math.max(0, value));
}

export function ProgressPanel(props: { stats: UiStats; width?: number }) {
  const { stats } = props;
  const width = Math.max(10, props.width ?? 40);

  const progress = stats.progress == null ? 0 : clamp01(stats.progress);
  const filled = Math.round(progress * width);
  const empty = Math.max(0, width - filled);
  const bar = `${'█'.repeat(filled)}${'░'.repeat(empty)}`;

  return (
    <Box flexDirection="column" borderStyle="round" paddingX={1} paddingY={0}>
      <Text bold>progress</Text>
      <Text>{bar}</Text>
    </Box>
  );
}
