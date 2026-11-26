> Full index: [index-career-and-tooling.md](index-career-and-tooling.md)

# Inspect, resolve, or cleanly abort Git merge conflicts

**When to use**: When merging branches modifies the same lines and Git pauses with `CONFLICT`.

**Rule**: Inspect conflicting hunks with `git diff` (or your editor's merge view), deliberately choose or combine incoming and current changes so the resulting code compiles and passes checks, remove all conflict markers, and finish with a merge commit. Whenever you are unsure about the conflicting changes or merged into the wrong branch, run `git merge --abort` to return cleanly to the pre-merge state.

**Example**:
```bash
git diff                  # inspect conflict hunks
# resolve markers in editor, then test
git add . && git commit -m "Resolve merge conflict"
# or bail out cleanly:
git merge --abort
```

**Avoid**: Leaving `<<<<<<<` / `>>>>>>>` conflict markers in files, or blindly accepting one side without reading the `git diff`.

**Source**: [Merge Conflicts — Fireship Git](https://fireship.dev/c/git/collab-merge-conflicts)
