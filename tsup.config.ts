import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/cli/index.tsx'],
  format: ['esm'],
  target: 'node20',
  platform: 'node',
  sourcemap: true,
  clean: true,
  dts: false,
});
