import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: true,
  treeshake: true,
  clean: true,
  format: ['cjs', 'esm', 'iife'],
  dts: true,
  minify: 'terser',
  minifySyntax: true,
  minifyIdentifiers: true,
  minifyWhitespace: true,
})
