import React from 'react';
import { Box, Text } from 'ink';
import type { RunnerEvent } from '../../core/runner/orchestrator';

export function ModelTable(props: { events: RunnerEvent[] }) {
  const byModel = new Map<string, { done: number; failed: number; scoreSum: number }>();
  for (const e of props.events) {
    if (e.type === 'question_completed') {
      const row = byModel.get(e.modelId) ?? { done: 0, failed: 0, scoreSum: 0 };
      row.done += 1;
      row.scoreSum += e.overallScore;
      byModel.set(e.modelId, row);
    }
    if (e.type === 'question_failed') {
      const row = byModel.get(e.modelId) ?? { done: 0, failed: 0, scoreSum: 0 };
      row.failed += 1;
      byModel.set(e.modelId, row);
    }
  }

  const rows = Array.from(byModel.entries()).sort(([a], [b]) => a.localeCompare(b));
  return (
    <Box flexDirection="column">
      <Text bold>models</Text>
      {rows.length === 0 ? <Text>(waiting)</Text> : null}
      {rows.map(([modelId, r]) => (
        <Text key={modelId}>
          {modelId}  done:{r.done}  failed:{r.failed}  score:{r.scoreSum.toFixed(2)}
        </Text>
      ))}
    </Box>
  );
}
