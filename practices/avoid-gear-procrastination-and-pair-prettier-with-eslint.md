> Full index: [index-career-and-tooling.md](index-career-and-tooling.md)

# Avoid "gear procrastination": keep editor setup lean and pair Prettier format-on-save with ESLint

**When to use**: When configuring an editor, formatter, and linter for JavaScript/React/Next.js projects.

**Rule**: Keep editor plugins minimal (Prettier, ESLint, plus only essential syntax highlighters) so tooling configuration never becomes "gear procrastination" or a source of broken updates. Enable **Prettier** format-on-save and defer to its defaults—treat a silent failure to format on save as an immediate early signal of a syntax error, and reserve `// prettier-ignore` as a rare escape hatch. Pair Prettier with **ESLint** (e.g., `eslint-config-next/core-web-vitals` + `eslint-plugin-jsx-a11y` + `eslint-config-prettier` so lint rules never fight formatting) to catch unused bindings, hook rule violations, and accessibility issues while you type.

**Example**:
```js
// eslint.config.mjs (Next.js flat config + Prettier compatibility)
import { defineConfig } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier/flat';

export default defineConfig([...nextVitals, prettier]);
```

**Avoid**: Installing dozens of novelty editor extensions that distract from shipping code, sprinkling `// prettier-ignore` or `/* eslint-disable */` broadly to bypass real issues, or running conflicting ESLint formatting rules against Prettier.

**Source**: [Code Editor — Joy of React](https://courses.joshwcomeau.com/joy-of-react/11-tools-of-the-trade/02-code-editor), [Prettier — Joy of React](https://courses.joshwcomeau.com/joy-of-react/11-tools-of-the-trade/04-prettier), [ESLint — Joy of React](https://courses.joshwcomeau.com/joy-of-react/11-tools-of-the-trade/05-eslint), [Next.js ESLint Config — Next.js Docs](https://nextjs.org/docs/app/building-your-application/configuring/eslint)
