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

// Format rank with medal emoji for top 3
function formatRank(rank: number | null, totalModels: number): string {
  if (rank === null) return '—';
  if (totalModels <= 1) return '—'; // No ranking with single model
  if (rank === 1) return '#1';
  if (rank === 2) return '#2';
  if (rank === 3) return '#3';
  return `#${rank}`;
}

// Max possible score per question (10 rubric items × weight 1 × maxScore 1)
const MAX_SCORE_PER_QUESTION = 10;

export function ModelStatsTable(props: { stats: UiStats }) {
  const rows = props.stats.models;
  const questionsPerModel = props.stats.questionsPerModel;
  const totalModels = props.stats.modelCount;

  const modelWidth = 24;
  const progressWidth = 8;
  const doneWidth = 7; // "48/240"
  const scoreWidth = 12; // "7.5/10 (#1)"
  const tpsWidth = 6;
  const tokWidth = 6;
  const costWidth = 7;

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

        // Format score as "X.X/10 (#N)" showing mean score out of max and rank
        let scoreStr: string;
        if (r.scoreMean == null) {
          scoreStr = '—';
        } else {
          const scoreVal = formatNumber(r.scoreMean, 1);
          const rankStr = formatRank(r.rank, totalModels);
          if (rankStr === '—') {
            scoreStr = `${scoreVal}/${MAX_SCORE_PER_QUESTION}`;
          } else {
            scoreStr = `${scoreVal}/${MAX_SCORE_PER_QUESTION} ${rankStr}`;
          }
        }

        const tps = r.lastTps == null ? '—' : formatNumber(r.lastTps, 0);
        const doneStr = `${done}/${questionsPerModel}`;
        const bar = miniProgressBar(done, questionsPerModel, progressWidth);

        // Highlight the leading model
        const isLeader = r.rank === 1 && totalModels > 1;

        return (
          <Text key={r.modelId}>
            {isLeader ? (
              <Text color="green">
                {padRight(ellipsize(r.modelId, modelWidth), modelWidth)}
              </Text>
            ) : (
              padRight(ellipsize(r.modelId, modelWidth), modelWidth)
            )}{' '}
            {bar} {padLeft(doneStr, doneWidth)}{' '}
            {isLeader ? (
              <Text color="green">{padLeft(scoreStr, scoreWidth)}</Text>
            ) : (
              padLeft(scoreStr, scoreWidth)
            )}{' '}
            {padLeft(tps, tpsWidth)} {padLeft(formatNumber(tok, 0), tokWidth)}{' '}
            {padLeft(formatUsd(r.costUsd), costWidth)}
          </Text>
        );
      })}
    </Box>
  );
}
