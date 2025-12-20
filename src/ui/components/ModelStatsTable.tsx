import React from 'react';
import { Box, Text } from 'ink';
import type { UiStats } from '../uiStats';
import { formatNumber, formatUsd } from '../format';

function padRight(s: string, width: number): string {
  if (s.length >= width) return s.slice(0, width);
  return s + ' '.repeat(width - s.length);
}

function padLeft(s: string, width: number): string {
  if (s.length >= width) return s.slice(0, width);
  return ' '.repeat(width - s.length) + s;
}

function ellipsize(s: string, width: number): string {
  if (s.length <= width) return s;
  if (width <= 1) return s.slice(0, width);
  return s.slice(0, width - 1) + '…';
}

export function ModelStatsTable(props: { stats: UiStats }) {
  const rows = props.stats.models;

  const modelWidth = 28;
  const doneWidth = 4;
  const failWidth = 4;
  const scoreWidth = 6;
  const tokWidth = 7;
  const costWidth = 8;

  return (
    <Box flexDirection="column" borderStyle="round" paddingX={1} paddingY={0}>
      <Text bold>models</Text>
      <Text>
        {padRight('model', modelWidth)} {padLeft('done', doneWidth)} {padLeft('fail', failWidth)}{' '}
        {padLeft('score', scoreWidth)} {padLeft('tok', tokWidth)} {padLeft('cost', costWidth)}
      </Text>
      {rows.length === 0 ? <Text>(waiting)</Text> : null}
      {rows.map(r => {
        const tok = r.usage?.totalTokens ?? 0;
        const score = r.scoreMean == null ? '—' : formatNumber(r.scoreMean, 2);
        return (
          <Text key={r.modelId}>
            {padRight(ellipsize(r.modelId, modelWidth), modelWidth)} {padLeft(String(r.completed), doneWidth)}{' '}
            {padLeft(String(r.failed), failWidth)} {padLeft(score, scoreWidth)} {padLeft(String(tok), tokWidth)}{' '}
            {padLeft(formatUsd(r.costUsd), costWidth)}
          </Text>
        );
      })}
    </Box>
  );
}
