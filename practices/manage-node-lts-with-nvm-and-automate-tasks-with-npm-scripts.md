> Full index: [index-career-and-tooling.md](index-career-and-tooling.md)

# Pin Node LTS versions with `nvm` and automate repetitive workflows via `package.json` scripts

**When to use**: When managing Node runtimes, package lockfiles, one-off CLI binaries, or repetitive project scaffolding/build hooks.

**Rule**: Run Node **LTS** releases by default and use a version manager (`nvm use <version>`, `nvm alias default <version>`) when switching across repositories with different runtime requirements. Commit lockfiles (`package-lock.json`) for reproducible installs, use `npx` for occasional CLI generators without polluting global installs, and inspect dependency footprint/maintenance before `npm install`. Automate repetitive multi-file chores (e.g., `new-component` scaffolding, `prebuild` asset/RSS generation, or `concurrently` multi-process runners) inside `package.json` `"scripts"` so every contributor runs the exact same workflow.

**Example**:
```json
// package.json: automate repetitive component creation & prebuild steps
{
  "scripts": {
    "new-component": "node scripts/new-component.js",
    "prebuild": "node scripts/generate-rss.js",
    "build": "next build"
  }
}
```

**Avoid**: Installing bleeding-edge odd-numbered Node releases for stability-sensitive work, deleting lockfiles to fix transient dependency errors, or manually creating boilerplate component folders by hand every time.

**Source**: [Node.js — Joy of React](https://courses.joshwcomeau.com/joy-of-react/11-tools-of-the-trade/03-node), [Intro to NPM — Joy of React](https://courses.joshwcomeau.com/joy-of-react/11-tools-of-the-trade/03.01-npm), [NPM Scripts & Custom Scripts — Joy of React](https://courses.joshwcomeau.com/joy-of-react/11-tools-of-the-trade/03.02-npm-scripts), [project-blog README — GitHub](https://github.com/joy-of-react/project-blog)
