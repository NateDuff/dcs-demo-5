#!/usr/bin/env node
/**
 * C-485 P2 — deep-link status fix for Azure Storage static-website hosting.
 *
 * Azure Storage static websites resolve `/<dir>` to `$web/<dir>/index.html`
 * (the same mechanism that makes the Astro demo-3 site return real 200s on
 * every route). A single-file SPA build only ships `$web/index.html`, so every
 * deep link falls through to `errorDocument_404Path` — the correct SPA body is
 * served, but with HTTP **404**. That soft-404 suppresses indexing and breaks
 * status-checking clients.
 *
 * This step writes a real `<route>/index.html` for each ENUMERATED route, so:
 *   - real routes            -> 200 with the SPA shell (client router renders)
 *   - unknown / bogus paths  -> still hard 404 (no blanket rewrite)
 *
 * Deliberately NOT a navigation-fallback / AFD url-rewrite: that would 200
 * every garbage URL and destroy the fleet's currently-correct hard-404
 * behaviour (see C-485 gate, 2026-08-13 triage adjudication).
 *
 * NOTE: Angular's build output root is dist/browser (see .dcs/site.yaml
 * output_location), and this runs AFTER `dcs-inject` so the emitted route
 * files carry the injected content shell.
 */
import { existsSync, mkdirSync, copyFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, 'dist', 'browser')

// Keep in sync with src/app/app.routes.ts (the '' route needs no alias).
const routes = ['classes', 'trainers', 'membership', 'contact']

const shell = join(outDir, 'index.html')
if (!existsSync(shell)) {
  console.error(`[route-files] FATAL: ${shell} not found — did the build run?`)
  process.exit(1)
}

for (const route of routes) {
  const dir = join(outDir, route)
  mkdirSync(dir, { recursive: true })
  copyFileSync(shell, join(dir, 'index.html'))
  console.log(`[route-files] wrote ${route}/index.html`)
}
console.log(`[route-files] ${routes.length} route file(s) emitted into dist/browser/`)
