> Full index: [index-career-and-tooling.md](index-career-and-tooling.md)

# Navigate and refactor code via Command Palette, symbol search, Peek References, and Rename Symbol

**When to use**: When jumping across files, tracing callers, renaming identifiers, or managing files in VS Code.

**Rule**: Keep hands on the keyboard by driving navigation through the Command Palette (`Ctrl/Cmd+Shift+P`), Quick Open (`Ctrl/Cmd+P`, prefix `@` to jump to symbols in the file), and Explorer toggles (`Ctrl/Cmd+B`, collapse-folders, and nested path creation like `dir/sub/file.ts` in New File). Inspect usages with **Peek References** instead of noisy workspace-wide text search, use language-aware **Rename Symbol** (rather than string find-and-replace) so every semantic reference updates safely, and trigger Quick Fixes/refactors from the lightbulb with `Ctrl/Cmd+.`.

**Example**:
```text
Ctrl/Cmd+P -> @myHandler   # jump straight to a symbol
Ctrl/Cmd+.                 # open contextual Code Actions / refactors
F2 / Rename Symbol         # semantic rename across imports and callers
```

**Avoid**: Renaming functions/props with plain text find-and-replace across the repo, or clicking through deep folder trees instead of Quick Open + `@` symbol jump.

**Source**: [Command Palette — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/basics-cmd-palette), [File Explorer — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/basics-explorer), [Auto-Directory — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/tip-auto-dir), [Move Quickly — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/tip-move-fast), [Find References — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/tip-find-refs), [Safe Rename — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/tip-safe-rename), [Code Actions — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/tip-actions)
