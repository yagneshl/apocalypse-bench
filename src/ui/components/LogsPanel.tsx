import React from 'react';
import { Box, Text } from 'ink';
import type { RunnerEvent } from '../../core/runner/orchestrator';

export function LogsPanel(props: { events: RunnerEvent[] }) {
  return (
    <Box flexDirection="column">
      <Text bold>logs</Text>
      {props.events.slice(-12).map((e, i) => (
        <Text key={i}>{JSON.stringify(e)}</Text>
      ))}
    </Box>
  );
}
