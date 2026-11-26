> Full index: [index-career-and-tooling.md](index-career-and-tooling.md)

# Edit repetitively faster with multi-cursor, line operations, Emmet, and linked tags

**When to use**: When making repeated edits, rearranging lines, or writing/wrapping HTML and JSX tags in VS Code.

**Rule**: Use `Ctrl/Cmd+D` to add cursors to the next matching symbol (or `Alt+Click` for arbitrary spots) rather than manual copy-paste across repeated tokens. Cut/copy/select/move whole lines without highlighting (`Ctrl/Cmd+C`/`X` on an empty selection, `Ctrl/Cmd+L` to select line, `Alt+Up/Down` to move, `Shift+Alt+Up/Down` to duplicate), fold noisy sections, and enable **Bracket Pair Colorization** and **Linked Editing** (auto-updates matching HTML closing tags). Speed up markup with Emmet abbreviations (`ul>li*3` + `Tab`, `Emmet: Balance Outward`, `Emmet: Wrap with Abbreviation`) and custom JSON user snippets for boilerplate you type daily.

**Example**:
```text
Ctrl/Cmd+D        # select next occurrence for simultaneous editing
ul>li*3 + Tab     # expand nested HTML/JSX structure via Emmet
Alt+Up / Down     # move current line or selection cleanly
```

**Avoid**: Highlighting entire lines with the mouse just to copy or move them, or updating opening and closing HTML tags separately when Linked Editing handles both.

**Source**: [Move Lines — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/tip-move-lines), [Folding — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/tip-folding), [Bracket Colorizer — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/tip-colorizer), [Multi Cursor — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/tip-multi-cursor), [Linked Editing — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/tip-linked-editing), [Multiline Editing — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/tip-multiline), [Emmet Snippets — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/tip-emmet), [Emmet Wrap Abbreviation — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/tip-emmet-wrap), [Snippets — Fireship VSCode Tricks](https://fireship.dev/c/vscode-tricks/tip-snippets)
