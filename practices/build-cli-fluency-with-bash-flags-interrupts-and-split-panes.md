> Full index: [index-career-and-tooling.md](index-career-and-tooling.md)

# Build baseline terminal fluency: Bash/Zsh navigation, `--help` flags, `Ctrl+C`, and split panes

**When to use**: When setting up a local frontend/full-stack environment, navigating Linux directories, or running dev servers alongside CLI commands.

**Rule**: Standardize on a POSIX-compatible shell (`Bash` or `Zsh` on macOS/Linux, `WSL` on Windows) so docs and scripts work out of the box. Master the high-leverage daily basics—`pwd`, `ls -la` (or `ls -sS`), `cd` (`.`, `..`, `~`, `cd -` to jump back), `mkdir -p`, `cp -r`, `mv`, `grep -r`, `sed 's/old/new/'`, `Tab` autocomplete, `--help` flags, `Ctrl+L` clear, and `Ctrl+C` to interrupt hung processes or stop dev servers cleanly—instead of memorizing obscure shell trivia. Know the standard Linux layout (`/etc` config, `/var` logs/caches, `/tmp` scratch, `/usr/local` local installs, `/home` users), handle `rm -rf` with extreme care, and dedicate one terminal tab per project split into panes so dev servers and git/npm tasks stay visible side by side.

**Example**:
```bash
# Inspect project directory, create nested dirs, search recursively, or check flags
ls -la
mkdir -p src/components && grep -rn "TODO" src/
npx next build --help
# Ctrl+C to terminate dev server; Ctrl+L to clear scroll clutter
```

**Avoid**: Closing the entire terminal window instead of pressing `Ctrl+C` to stop a server, running `rm -rf` on unverified paths, or trying to follow Bash-assumed web tooling tutorials directly in `cmd.exe` instead of WSL/Zsh/Bash.

**Source**: [Initial Setup — Joy of React](https://courses.joshwcomeau.com/joy-of-react/11-tools-of-the-trade/01.01-initial-setup), [Navigation, Flags & Interrupting — Joy of React](https://courses.joshwcomeau.com/joy-of-react/11-tools-of-the-trade/01.02-navigation), [Tips & Tricks — Joy of React](https://courses.joshwcomeau.com/joy-of-react/11-tools-of-the-trade/01.05-tips-n-tricks), [10 Essential Commands — Fireship Linux](https://fireship.dev/c/linux/basics-10-commands), [The File System — Fireship Linux](https://fireship.dev/c/linux/basics-file-system), [Grep & Sed — Fireship Linux](https://fireship.dev/c/linux/basics-grep)
