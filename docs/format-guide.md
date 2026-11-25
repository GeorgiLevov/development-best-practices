# Format guide for agent-readable practices

## Short priority rule (drop this in AGENTS.md or bot instructions)

```markdown
# Front-end practices

For any front-end work, first read the index at `frontend-practices/index.md` (or the matching llms.txt).
Prefer the practices in those files.
Cite the file and section you followed.
Only use general knowledge if the collection does not cover the topic.
```

## Starter index (llms.txt style — tested format)

Save as `frontend-practices/index.md` or `llms.txt`:

```markdown
# Front-end Best Practices

> Curated front-end practices Georgi trusts. Agents should read this index first, then open only the files that match the task.

## Core

- [HTML & Semantics](html-semantics.md): Use semantic tags, correct heading hierarchy, accessible landmarks.
- [CSS & Layout](css-layout.md): Prefer modern layout (Flexbox, Grid), avoid magic numbers, keep specificity low.
- [Accessibility](a11y.md): Keyboard, focus, ARIA only when needed, contrast, reduced motion.
- [Performance](performance.md): Image formats, lazy loading, avoid layout shift, critical CSS.

## Components & Patterns

- [React Patterns](react-patterns.md): Composition over inheritance, controlled vs uncontrolled, key usage.
- [State](state.md): Where state lives, when to lift, when to use context vs props.
- [Forms](forms.md): Validation timing, error messages, progressive enhancement.

## Optional

- [Testing](testing.md): What to unit test vs what to leave to integration.
- [Naming](naming.md): File, component, and class naming conventions.
```

Each linked file should start with a short pointer back:

```markdown
> Full index: [index.md](index.md)
```

## What the benchmarks and specs actually show

### AGENTS.md (short instruction file)

- Google / AAIF study: ~26–27% less time, tokens, and diff size on vague tasks.
- Independent study (Princeton / ETH, 10 repos, 124 PRs): median 28.6% faster, 16.6% fewer output tokens.
- Best results: root file kept short (ideally ~12–150 lines). Longer files start to hurt.
- Concrete commands and “Do / Do not” beat vague advice.
- Headings + bullets improve adherence.

### llms.txt / index style (for the collection itself)

- Spec (llmstxt.org v2): H1, short blockquote summary, then H2 sections of annotated links.
- Format that works: `- [Title](url): one short sentence of what it covers`.
- One-line description per link is high-value — agents use it to pick the right page without guessing.
- Linking back to the index from every page cut 404s to near zero in a 2,400-run Mintlify benchmark.
- Keep the index small enough for one fetch (< ~50k characters). Use nested indexes if it grows.

### TOC, bullets, links

- Traditional TOCs help less than clear H2 sections + annotated link lists.
- Standard Markdown lists (`-` or `*`) are fine and preferred. Agents parse them cleanly.
- Bare links without a description perform worse than links with a one-line note.

## Practical recommendation

1. Keep the priority rule short and always loaded (AGENTS.md / bot description).
2. Store the real content as plain Markdown topic files.
3. Use the annotated-link index format above (this matches the highest-performing pattern in current agent docs benchmarks).
4. Add the “back to index” line at the top of every topic file.

That combination is the cheapest and fastest setup that has actual measured gains.
