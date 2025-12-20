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
  totalQuestions,
}: {
  runPromise: Promise<RunResult | null>;
  getInitialEvents: () => RunnerEvent[];
  subscribeToEvents: (onEvent: (e: RunnerEvent) => void) => () => void;
  totalQuestions: number;
}) {
  const EVENTS_LIMIT = 2000;
  const [events, setEvents] = useState<RunnerEvent[]>(() => {
    const initial = getInitialEvents();
    return initial.length <= EVENTS_LIMIT ? initial : initial.slice(-EVENTS_LIMIT);
  });

  useEffect(() => {
    return subscribeToEvents((e) => {
      setEvents((prev) => {
        const next = [...prev, e];
        if (next.length <= EVENTS_LIMIT) return next;
        return next.slice(-EVENTS_LIMIT);
      });
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
  useInput(
    (input, key) => {
      if (input === 'q' || key.escape) process.exit(0);
      if (input === 'l') setShowLogs((v) => !v);
    },
    { isActive: process.stdin.isTTY === true },
  );

  if (!done) {
    return <RunScreen events={events} showLogs={showLogs} totalQuestions={totalQuestions} />;
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
