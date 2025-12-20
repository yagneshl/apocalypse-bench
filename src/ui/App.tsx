import React, { useEffect, useState } from 'react';
import { Box, Text, useInput } from 'ink';
import type { RunnerEvent } from '../core/runner/orchestrator';
import { RunScreen } from './screens/RunScreen';
import { SummaryScreen } from './screens/SummaryScreen';

type RunResult = {
  runId: string;
  outDir: string;
  summaryPath: string;
  reportPath: string;
};

export function App({
  runPromise,
  getInitialEvents,
  subscribeToEvents,
}: {
  runPromise: Promise<RunResult | null>;
  getInitialEvents: () => RunnerEvent[];
  subscribeToEvents: (onEvent: (e: RunnerEvent) => void) => () => void;
}) {
  const [events, setEvents] = useState<RunnerEvent[]>(() => getInitialEvents());

  useEffect(() => {
    return subscribeToEvents((e) => {
      setEvents((prev) => [...prev, e]);
    });
  }, [subscribeToEvents]);

  const [done, setDone] = useState<RunResult | null>(null);

  useEffect(() => {
    runPromise
      .then((r) => {
        setDone(r);
      })
      .catch((err) => {
        setDone({
          runId: 'failed',
          outDir: '',
          summaryPath: '',
          reportPath: (err as Error).message,
        });
      });
  }, [runPromise]);

  const [showLogs, setShowLogs] = useState(false);
  const [_showScores, setShowScores] = useState(false);
  useInput(
    (input, key) => {
      if (input === 'q' || key.escape) process.exit(0);
      if (input === 'l') setShowLogs((v) => !v);
      if (input === 's') setShowScores((v) => !v);
    },
    { isActive: process.stdin.isTTY === true },
  );

  if (!done) {
    return <RunScreen events={events} showLogs={showLogs} />;
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
