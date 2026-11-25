> Full index: [index-career-and-tooling.md](index-career-and-tooling.md)

# Shelf work with named `git stash` entries and use `git reset --hard` cautiously

**When to use**: When switching tasks mid-edit, unstaging files, or rolling back local uncommitted/unpushed commits.

**Rule**: Use `git stash push -m "label"` (modern replacement for legacy `git stash save`) to shelve dirty changes temporarily, inspect entries with `git stash list`, and restore with `git stash apply <index>` or `git stash pop`. Distinguish `git reset` modes carefully: bare `git reset` unstages files safely without losing edits; `git reset <commit>` moves the branch pointer while keeping working-directory changes; `git reset <commit> --hard` **permanently discards** uncommitted local changes—never run `--hard` without verifying nothing needed is unsaved.

**Example**:
```bash
git stash push -m "wip-auth-refactor"
git stash list
git stash pop             # or: git stash apply 0
git reset HEAD~1          # undo last local commit, keep edits in working tree
```

**Avoid**: Running `git reset --hard` reflexively before checking `git status` / `git diff` or stashing, or forgetting what is inside an unnamed stash stack.

**Source**: [git stash — Fireship Git](https://fireship.dev/c/git/advanced-stash), [git reset — Fireship Git](https://fireship.dev/c/git/advanced-reset)
