import React from 'react';
import { Box, Text } from 'ink';
import type { RunnerEvent } from '../../core/runner/orchestrator';

export function LogsPanel(props: { events: RunnerEvent[] }) {
  const recentEvents = props.events.slice(-12);
  const startIndex = Math.max(0, props.events.length - 12);
  return (
    <Box flexDirection="column">
      <Text bold>logs</Text>
      {recentEvents.map((e, i) => (
        <Text key={startIndex + i}>{JSON.stringify(e)}</Text>
      ))}
    </Box>
  );
}
