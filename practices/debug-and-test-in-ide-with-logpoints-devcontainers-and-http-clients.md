> Full index: [index-career-and-tooling.md](index-career-and-tooling.md)

# Debug with IDE logpoints, Dev Containers, integrated Git/tasks, and local REST clients

**When to use**: When inspecting runtime behavior, testing local APIs, or aligning dev environments with production runtimes.

**Rule**: Launch the editor from the terminal with `code .` and use built-in IDE workflows instead of scattering debug code or context-switching needlessly: attach the **Debugger** with breakpoints and **logpoints** (emits logs without modifying source files), run detected npm/Docker **Tasks**, review diffs/commits/reverts in the Source Control panel, and test local endpoints with an integrated HTTP client (e.g., Thunder Client, Postman, or Insomnia). Use **Dev Containers** (`Reopen in Container`) when team parity or OS-specific server dependencies matter, and GitHub's `.` / `Ctrl/Cmd+K` shortcuts for quick remote inspection.

**Example**:
```bash
code .             # open current repo in VS Code from terminal
# In debugger gutter: right-click -> Add Logpoint (logs without editing source)
```

**Avoid**: Leaving temporary `console.log` statements in committed code when a debugger logpoint would suffice, or debugging production-only Linux/runtime mismatches directly on an uncontainerized host.

**Source**: [CLI — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/basics-cli), [Tasks — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/ide-tasks), [Git — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/ide-git), [Remote — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/ide-remote), [Debugger — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/ide-debugger), [HTTP Client — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/ide-http), [Docker — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/ide-docker), [VS Code Tips — Fireship Git](https://fireship.dev/c/git/basics-vscode), [Rest Client — Fireship JavaScript](https://fireship.dev/c/js/app-rest-client)
