> Full index: [index-career-and-tooling.md](index-career-and-tooling.md)

# Configure Git identity, clear commit history, and `-u` upstream tracking

**When to use**: When setting up Git on a machine, cloning repositories, committing work, or pushing a new branch.

**Rule**: Set global `user.name` and `user.email` (`git config --global ...`) and inspect config with `git config --list` before committing. Review history with `git log`, stage deliberately (use `-a` only when intentionally committing all already-tracked changes), and pass `-u` on first push (`git push -u origin <branch>`) to bind the upstream tracking branch so subsequent `git pull` / `git push` work cleanly without extra flags. Clone into explicit folders with `git clone <url> <dir>`.

**Example**:
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git commit -m "Add validation helper"
git push -u origin feature/validation
```

**Avoid**: Committing with an unconfigured machine identity, or running `git commit -am` blindly when untracked files or partial edits should stay out of the commit.

**Source**: [Install — Fireship Git](https://fireship.dev/c/git/basics-install), [git commit — Fireship Git](https://fireship.dev/c/git/basics-commit), [git push — Fireship Git](https://fireship.dev/c/git/remote-push), [git clone — Fireship Git](https://fireship.dev/c/git/remote-clone)
