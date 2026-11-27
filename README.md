# development-best-practices

Curated development best practices for coding agents.

## How agents should use this repo

1. Read `AGENTS.md` for the priority rule.
2. Read `practices/index.md` (llms.txt style), then follow its link to the matching `practices/index-*.md` sub-index.
3. Open only the matching topic file.
4. Prefer practices from this collection. Cite the file and section used.

## Format notes

- `practices/index.md` is a thin router (core links + one link per sub-index); topic links live in the flat `practices/index-*.md` sub-indexes.
- Index uses annotated links: `- [Title](file.md): one short sentence`
- Each topic file and sub-index should start with a pointer back to the index.
- Keep individual files focused and under ~150 lines when possible.

## Cursor skills

Approved Cursor skills and the rule for installing them: [policies/agent-skill-provisioning.md](policies/agent-skill-provisioning.md).

```bash
node automation/bootstrap-cursor-skills.mjs --target /path/to/repo
```

## Size estimate

100,000 files × ~150 lines × ~60 bytes/line ≈ 900 MB of Markdown text.
Git overhead and history will make the repo larger.
