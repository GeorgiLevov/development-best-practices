> Full index: [index.md](index.md)

# Career, Engineering Process & Tooling

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

## Engineering Workflow & Tooling

- [Build baseline terminal fluency: Bash/Zsh navigation, `--help` flags, `Ctrl+C`, and split panes](build-cli-fluency-with-bash-flags-interrupts-and-split-panes.md): Standardize on Bash/Zsh (or WSL on Windows), master `pwd`/`ls`/`cd`/`--help`/`Ctrl+C`, and split dev-server and command panes per project.
- [Avoid "gear procrastination": keep editor setup lean and pair Prettier format-on-save with ESLint](avoid-gear-procrastination-and-pair-prettier-with-eslint.md): Keep editor plugins minimal, use Prettier format-on-save (and syntax-error feedback) alongside `eslint-config-next` + `eslint-config-prettier`.
- [Pin Node LTS versions with `nvm` and automate repetitive workflows via `package.json` scripts](manage-node-lts-with-nvm-and-automate-tasks-with-npm-scripts.md): Stick to Node LTS via `nvm`, commit lockfiles, use `npx` for one-off CLIs, and script repetitive scaffolding or `prebuild` tasks in `package.json`.
- [Understand transpiler vs bundler roles and choose the simplest fit instead of suffering tool paralysis](understand-transpiler-bundler-roles-and-avoid-decision-paralysis.md): Distinguish transpilers (`Babel`/`SWC`) from bundlers (`Vite`/`Webpack`/`Turbopack`), keep bundling for compression/waterfalls, and start with the simplest fitting stack.

## Learning, Portfolio & Technical Interviews

- [Pair guided study with unguided passion projects and intentional experiments to escape tutorial hell](pair-guided-study-with-unguided-projects-to-escape-tutorial-hell.md): Alternate courses/docs with unguided projects and stretch goals, test hypotheses by breaking code safely, and layer 1–2 new tools at a time.
- [Optimize the top of the hiring funnel with fewer, tailored applications and authentic cover letters](target-hiring-funnels-with-tailored-cover-letters-and-high-signal-apps.md): Respect steep hiring funnels by writing company-specific cover letters tied to real product interest and relevant projects instead of mass applying.
- [Curate 2–5 deep projects on a dedicated portfolio site that highlights engineering decisions](curate-a-portfolio-of-deep-projects-that-explain-tradeoffs.md): Showcase 2–5 substantial projects with zero-friction live demos and clear write-ups of hard problems and tradeoffs rather than bare GitHub links or tutorial clones.
- [Narrate structured problem-solving in technical interviews and recognize legacy React screeners](demonstrate-structured-debugging-and-legacy-context-in-interviews.md): Think aloud, test edge cases iteratively during coding interviews, and know legacy React terms (HOCs, render props, class lifecycles, event pooling) for dated phone screens.
