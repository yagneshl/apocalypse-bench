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

function miniProgressBar(completed: number, total: number, width: number): string {
  if (total <= 0) return '░'.repeat(width);
  const progress = Math.min(1, completed / total);
  const filled = Math.round(progress * width);
  const empty = Math.max(0, width - filled);
  return '█'.repeat(filled) + '░'.repeat(empty);
}

export function ModelStatsTable(props: { stats: UiStats }) {
  const rows = props.stats.models;
  const questionsPerModel = props.stats.questionsPerModel;

  const modelWidth = 26;
  const progressWidth = 10;
  const doneWidth = 7; // "48/240"
  const scoreWidth = 5;
  const tpsWidth = 7;
  const tokWidth = 7;
  const costWidth = 8;

  return (
    <Box flexDirection="column">
      <Text dimColor>
        {padRight('model', modelWidth)} {padRight('progress', progressWidth)}{' '}
        {padLeft('done', doneWidth)} {padLeft('score', scoreWidth)}{' '}
        {padLeft('tps', tpsWidth)} {padLeft('tok', tokWidth)} {padLeft('cost', costWidth)}
      </Text>
      {rows.length === 0 ? <Text dimColor>(waiting for results…)</Text> : null}
      {rows.map((r) => {
        const done = r.completed + r.failed;
        const tok = r.usage?.totalTokens ?? 0;
        const score = r.scoreMean == null ? '—' : formatNumber(r.scoreMean, 2);
        const tps = r.lastTps == null ? '—' : formatNumber(r.lastTps, 0);
        const doneStr = `${done}/${questionsPerModel}`;
        const bar = miniProgressBar(done, questionsPerModel, progressWidth);

        return (
          <Text key={r.modelId}>
            {padRight(ellipsize(r.modelId, modelWidth), modelWidth)} {bar}{' '}
            {padLeft(doneStr, doneWidth)} {padLeft(score, scoreWidth)}{' '}
            {padLeft(tps, tpsWidth)} {padLeft(String(tok), tokWidth)}{' '}
            {padLeft(formatUsd(r.costUsd), costWidth)}
          </Text>
        );
      })}
    </Box>
  );
}
