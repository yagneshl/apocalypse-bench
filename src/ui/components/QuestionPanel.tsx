import React from 'react';
import { Box, Text } from 'ink';
import type { RunnerEvent } from '../../core/runner/orchestrator';

export function QuestionPanel(props: { events: RunnerEvent[] }) {
  const lastStart = [...props.events].reverse().find(e => e.type === 'question_started');
  if (!lastStart || lastStart.type !== 'question_started') {
    return (
      <Box flexDirection="column">
        <Text bold>question</Text>
        <Text>(waiting)</Text>
      </Box>
    );
  }

  return (
    <Box flexDirection="column">
      <Text bold>question</Text>
      <Text>
        {lastStart.questionId} ({lastStart.modelId})
      </Text>
    </Box>
  );
}
