import React from 'react';
import { Box, Text } from 'ink';
import type { RunnerEvent } from '../../core/runner/orchestrator';
import { ModelTable } from '../components/ModelTable';
import { LogsPanel } from '../components/LogsPanel';
import { QuestionPanel } from '../components/QuestionPanel';

export function RunScreen(props: { events: RunnerEvent[]; showLogs: boolean }) {
  const last = props.events[props.events.length - 1];
  const runId = props.events.find(e => e.type === 'run_started')?.runId;

  const completed = props.events.filter(e => e.type === 'question_completed').length;
  const failed = props.events.filter(e => e.type === 'question_failed').length;

  return (
    <Box flexDirection="column" paddingX={1}>
      <Text bold>apocbench</Text>
      <Text>run: {runId ?? 'starting...'}</Text>
      <Text>
        progress: {completed} done, {failed} failed
      </Text>
      <Text>controls: l=logs s=scores q=quit</Text>

      <Box marginTop={1}>
        <ModelTable events={props.events} />
      </Box>

      <Box marginTop={1}>
        <QuestionPanel events={props.events} />
      </Box>

      <Box marginTop={1}>
        <Text>
          last: {last ? JSON.stringify(last).slice(0, 120) : '...'}
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
