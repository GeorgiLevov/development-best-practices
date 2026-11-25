> Full index: [index-css-architecture.md](index-css-architecture.md)

# Keep a reusable Sass starter and clone it with degit or a GitHub template

**When to use**: When the layered Sass system is in good enough shape to start the next site from it, or when the system itself just gained a utility, token, or build step.

**Rule**: Publish the architecture as a GitHub template repository (public or private) and fold improvements back into that template so new projects inherit them. For a fast local copy without git history, `npx degit user/repo my-project` (degit can also target a branch or another host). Building the starter yourself the first time is worth the muscle memory; after that, clone rather than rebuild. A living example is Kevin Powell’s `website-starter-template` line (v3 adds tokens, PostCSS, and PurgeCSS).

**Example**:
```bash
npx degit kevin-powell/website-starter-template-v3 my-site
cd my-site && npm install && npm run dev
```

**Avoid**: Starting every project from a blank Vite app and re-creating abstracts by hand, or letting a “finished” template rot while real projects diverge.

**Source**: [Creating a template — Beyond CSS](https://module-3.beyondcss.dev/lessons/creating-a-template), [A faster way to use your template — Beyond CSS](https://module-3.beyondcss.dev/lessons/a-faster-way-to-use-your-template), [degit](https://github.com/Rich-Harris/degit), [website-starter-template-v3](https://github.com/kevin-powell/website-starter-template-v3)
