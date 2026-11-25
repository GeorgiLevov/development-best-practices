> Full index: [index-career-and-tooling.md](index-career-and-tooling.md)

# Build baseline terminal fluency: Bash/Zsh navigation, `--help` flags, `Ctrl+C`, and split panes

**When to use**: When setting up a local frontend/full-stack environment or running dev servers alongside CLI commands.

**Rule**: Standardize on a POSIX-compatible shell (`Bash` or `Zsh` on macOS/Linux, `WSL` on Windows) so docs and scripts work out of the box. Master the high-leverage daily basics—`pwd`, `ls -la`, `cd` (`.`, `..`, `~`), `Tab` autocomplete, `--help` flags, `Ctrl+L` clear, and `Ctrl+C` to interrupt hung processes or stop dev servers cleanly—instead of memorizing obscure shell trivia. Dedicate one terminal tab per project split into panes: keep long-running watchers/dev servers visible in one pane and run git/npm tasks in the adjacent pane.

**Example**:
```bash
# Inspect project directory, stop a running dev server cleanly, or check CLI flags
ls -la
npx next build --help
# Ctrl+C to terminate dev server; Ctrl+L to clear scroll clutter
```

**Avoid**: Closing the entire terminal window instead of pressing `Ctrl+C` to stop a server, or trying to follow Bash-assumed web tooling tutorials directly in `cmd.exe` instead of WSL/Zsh/Bash.

**Source**: [Initial Setup — Joy of React](https://courses.joshwcomeau.com/joy-of-react/11-tools-of-the-trade/01.01-initial-setup), [Navigation, Flags & Interrupting — Joy of React](https://courses.joshwcomeau.com/joy-of-react/11-tools-of-the-trade/01.02-navigation), [Tips & Tricks — Joy of React](https://courses.joshwcomeau.com/joy-of-react/11-tools-of-the-trade/01.05-tips-n-tricks)
