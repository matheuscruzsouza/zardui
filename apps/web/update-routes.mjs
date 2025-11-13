#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const routesFile = join(__dirname, 'src/app/shared/constants/routes.constant.ts');
const content = readFileSync(routesFile, 'utf-8');
const routes = [...content.matchAll(/path:\s*'([^']+)',\s*available:\s*true/g)]
  .map(m => m[1])
  // Filter out static file routes (e.g., .txt, .xml, .json) that don't need prerendering
  .filter(route => !/\.(txt|xml|json|ico|svg|png|jpg|jpeg|gif|webp|woff|woff2|ttf|eot)$/i.test(route));

writeFileSync(join(__dirname, 'prerender-routes.txt'), ['/', ...routes].join('\n'));
