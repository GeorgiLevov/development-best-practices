> Full index: [index.md](index.md)

# Career, Engineering Process & Tooling

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

## Engineering Workflow & Tooling

- [Build baseline terminal fluency: Bash/Zsh navigation, `--help` flags, `Ctrl+C`, and split panes](build-cli-fluency-with-bash-flags-interrupts-and-split-panes.md): Standardize on Bash/Zsh (or WSL), master daily nav/file/`grep`/`sed`/`--help`/`Ctrl+C` commands, know Linux `/etc`/`/var`/`/tmp` layout, and split dev/CLI panes.
- [Avoid "gear procrastination": keep editor setup lean and pair Prettier format-on-save with ESLint](avoid-gear-procrastination-and-pair-prettier-with-eslint.md): Keep editor plugins and settings minimal (Prettier format-on-save, ESLint + `eslint-config-prettier`, optional ligatures, concise shortcut cheatsheet).
- [Pin Node LTS versions with `nvm` and automate repetitive workflows via `package.json` scripts](manage-node-lts-with-nvm-and-automate-tasks-with-npm-scripts.md): Stick to Node LTS via `nvm`, commit lockfiles, use `npx` for one-off CLIs, and script repetitive scaffolding or `prebuild` tasks in `package.json`.
- [Understand transpiler vs bundler roles and choose the simplest fit instead of suffering tool paralysis](understand-transpiler-bundler-roles-and-avoid-decision-paralysis.md): Distinguish transpilers (`Babel`/`SWC`) from bundlers (`Vite`/`Webpack`/`Turbopack`), compile syntax vs polyfill missing runtime APIs (`Promise`/`fetch`/`includes`), keep bundling for compression/waterfalls, and start with the simplest fitting stack.

## Learning, Portfolio & Technical Interviews

- [Pair guided study with unguided passion projects and intentional experiments to escape tutorial hell](pair-guided-study-with-unguided-projects-to-escape-tutorial-hell.md): Alternate courses/docs with unguided projects and stretch goals, test hypotheses by breaking code safely, and layer 1–2 new tools at a time.
- [Optimize the top of the hiring funnel with fewer, tailored applications and authentic cover letters](target-hiring-funnels-with-tailored-cover-letters-and-high-signal-apps.md): Respect steep hiring funnels by writing company-specific cover letters tied to real product interest and relevant projects instead of mass applying.
- [Curate 2–5 deep projects on a dedicated portfolio site that highlights engineering decisions](curate-a-portfolio-of-deep-projects-that-explain-tradeoffs.md): Showcase 2–5 substantial projects with zero-friction live demos and clear write-ups of hard problems and tradeoffs rather than bare GitHub links or tutorial clones.
- [Narrate structured problem-solving in technical interviews and recognize legacy React screeners](demonstrate-structured-debugging-and-legacy-context-in-interviews.md): Think aloud, test edge cases iteratively during coding interviews, and know legacy React terms (HOCs, render props, class lifecycles, event pooling) for dated phone screens.

## Editor & IDE Workflows

- [Navigate and refactor code via Command Palette, symbol search, Peek References, and Rename Symbol](navigate-code-by-symbols-references-and-palette.md): Drive VS Code via Command Palette, `@` symbol search, nested Explorer paths, Peek References, semantic Rename Symbol, and `Ctrl+.` Code Actions.
- [Edit repetitively faster with multi-cursor, line operations, Emmet, and linked tags](edit-efficiently-with-multicursor-emmet-and-linked-tags.md): Use `Ctrl/Cmd+D` and `Alt+Click` multi-cursors, mouse-free line copy/move, folding, bracket colorization, Linked Editing, Emmet abbreviations/wrapping, and user snippets.
- [Debug with IDE logpoints, Dev Containers, integrated Git/tasks, and local REST clients](debug-and-test-in-ide-with-logpoints-devcontainers-and-http-clients.md): Launch with `code .`, prefer debugger logpoints over stray `console.log`s, use integrated Git/Tasks and HTTP clients (e.g. Thunder Client), and match server runtimes via Dev Containers.

## Git & Version Control

- [Configure Git identity, clear commit history, and `-u` upstream tracking](configure-git-identity-commits-and-upstream-tracking.md): Set global `user.name`/`user.email`, commit intentionally, review `git log`, clone cleanly, and bind upstream remotes with `git push -u`.
- [Inspect, resolve, or cleanly abort Git merge conflicts](resolve-or-abort-git-merge-conflicts.md): Inspect conflicts with `git diff`, merge valid code cleanly without leftover markers, or return to pre-merge state with `git merge --abort`.
- [Shelf work with named `git stash` entries and use `git reset --hard` cautiously](use-git-stash-and-reset-safely.md): Shelve work with `git stash push -m` / `list` / `pop`, and separate safe unstaging or `git reset <commit>` from destructive `git reset --hard`.
