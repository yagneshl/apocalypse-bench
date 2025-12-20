import React from 'react';
import { Box, Text } from 'ink';

export function SummaryScreen(props: {
  result: { runId: string; outDir: string; summaryPath: string; reportPath: string };
}) {
  return (
    <Box flexDirection="column" paddingX={1}>
      <Text bold>completed</Text>
      <Text>runId: {props.result.runId}</Text>
      <Text>outDir: {props.result.outDir}</Text>
      <Text>summary: {props.result.summaryPath}</Text>
      <Text>report: {props.result.reportPath}</Text>
      <Text>press q to quit</Text>
    </Box>
  );
}
