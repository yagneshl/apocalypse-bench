import React from 'react';
import { Box, Text } from 'ink';
import type { RunnerEvent } from '../../core/runner/orchestrator';
import { formatEventSummary } from '../format';

export function LogsPanel(props: { events: RunnerEvent[] }) {
  const recentEvents = props.events.slice(-16);
  const startIndex = Math.max(0, props.events.length - 16);
  return (
    <Box flexDirection="column">
      <Text bold>logs</Text>
      {recentEvents.map((e, i) => (
        <Text key={startIndex + i}>{formatEventSummary(e)}</Text>
      ))}
    </Box>
  );
}
