import { defineConfig } from 'tsup';
export default defineConfig({
  entryPoints: ['src/luhn.ts', 'src/validationFactory.ts', 'src/newAlgorithm.ts', 'src/complexAlgorithm.ts'],
  outDir: 'dist',
  target: 'node18',
  format: ['esm'],
  treeshake: true,
  clean: true,
  minify: true
});