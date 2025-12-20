import React, { useMemo, useState } from 'react';
import { Box, Text, useInput } from 'ink';
import type { RunnerEvent } from '../core/runner/orchestrator';
import { RunScreen } from './screens/RunScreen';
import { SummaryScreen } from './screens/SummaryScreen';

export function App(props: {
  runPromise: Promise<{ runId: string; outDir: string; summaryPath: string; reportPath: string } | null>;
  events: RunnerEvent[];
}) {
  const [done, setDone] = useState<{
    runId: string;
    outDir: string;
    summaryPath: string;
    reportPath: string;
  } | null>(null);

  useMemo(() => {
    props.runPromise
      .then(r => {
        setDone(r);
      })
      .catch(err => {
        setDone({
          runId: 'failed',
          outDir: '',
          summaryPath: '',
          reportPath: (err as Error).message,
        });
      });
  }, [props.runPromise]);

  const [showLogs, setShowLogs] = useState(false);
  const [_showScores, setShowScores] = useState(false);
  useInput((input, key) => {
    if (input === 'q' || key.escape) process.exit(0);
    if (input === 'l') setShowLogs(v => !v);
    if (input === 's') setShowScores(v => !v);
  });

  if (!done) {
    return <RunScreen events={props.events} showLogs={showLogs} />;
  }

  if (done === null) {
    return (
      <Box>
        <Text>dry-run complete</Text>
      </Box>
    );
  }

  return <SummaryScreen result={done} />;
}
