# Agent skill provisioning

Provision Cursor skills into the target repo before every coding handoff. The catalog in this repo is the only approved set. Pinned commits live in [`skills/approved-skills.json`](../skills/approved-skills.json). Profiles live in [`skills/project-profiles.json`](../skills/project-profiles.json).

Cloud agents and Cursor Automations load skills from the target repo. They do not load skills from a developer's personal Cursor config. If the skills are not committed under `<target>/.cursor/skills/`, the coding agent will not have them.

## Before the handoff

1. Run the bootstrap script (dry-run, then for real).
2. If it exits non-zero, stop and report the error. Do not start the coding agent.
3. Commit only the skill files, with this message and nothing else in the commit:

```bash
git add -- .cursor/skills
git commit -m "chore: provision Cursor skills"
```

Do not mix that commit with application changes. Do not upgrade a pin while doing unrelated work. A pin change is its own catalog update, then its own provision commit in the target repo.

The script copies files. It does not install npm packages. `playwright-cli` lists `npm i -g @playwright/cli@latest` and browsers for when the task actually needs a browser.

## Command

From a checkout of this repo (the script finds `skills/vendor` next to itself):

```bash
node automation/bootstrap-cursor-skills.mjs --target /path/to/repo
```

Dry-run prints the same table and writes nothing:

```bash
node automation/bootstrap-cursor-skills.mjs --target /path/to/repo --dry-run
```

`--json` prints one JSON object instead of the table. `--catalog` is optional.

## Shallow clone

```bash
git clone --depth 1 https://github.com/GeorgiLevov/development-best-practices.git /tmp/skill-catalog
node /tmp/skill-catalog/automation/bootstrap-cursor-skills.mjs --target /path/to/repo
```

## Raw GitHub tarball

```bash
curl -fsSL -o /tmp/skill-catalog.tar.gz \
  https://codeload.github.com/GeorgiLevov/development-best-practices/tar.gz/refs/heads/master
mkdir -p /tmp/skill-catalog
tar -xzf /tmp/skill-catalog.tar.gz -C /tmp/skill-catalog --strip-components=1
node /tmp/skill-catalog/automation/bootstrap-cursor-skills.mjs --target /path/to/repo
```

If the script is already on disk and the vendor tree is not, point `--catalog` at that tarball URL. The script downloads it, picks the profile, and still writes only under `<target>/.cursor/skills/`.

## What gets installed

Every repo gets `systematic-debugging` and `verification-before-completion`.

| Profile | Also installed | Not installed |
| --- | --- | --- |
| `react`, `next` | `frontend-design`, `playwright-cli`, `vercel-react-best-practices`, `vercel-composition-patterns` | |
| `preact`, `vanilla`, `web-extension` | `frontend-design`, `playwright-cli` | Vercel React skills |
| `backend` | | `frontend-design`, `playwright-cli`, Vercel React skills |

First matching rule in `project-profiles.json` wins:

1. Root `manifest.json` with `manifest_version` → `web-extension` (even if `react` is also a dependency).
2. `next` dependency → `next`.
3. `react` dependency → `react`.
4. `preact` dependency → `preact`.
5. `vite` dependency, or any root `*.html` file → `vanilla`.
6. Any other `package.json` → `backend`.

Dependencies are read from `dependencies`, `devDependencies`, `peerDependencies`, and `optionalDependencies`. React skills are only for the `react` and `next` profiles. Do not copy them into Preact, vanilla, extension, or backend repos by hand.

## Drift and other skills

The script hashes each selected `SKILL.md`:

- `installed` — the folder was copied in.
- `present` — the folder was already there and the hash matches. Nothing was overwritten.
- `drift` — the folder is there and the hash differs. The script does not overwrite it, writes nothing else, and exits non-zero.

To put a drifted skill back on the pin, remove that skill directory and run the script again. Do that in the provision commit, not in an application change. If the local edit should become the new pin, Georgi has to review a catalog change. Do not keep going with a drifted skill.

Skill directories the catalog does not manage are left in place. Provisioning must not add new skills from outside `skills/approved-skills.json`.

`PROVENANCE.json` in `.cursor/skills/` records `name`, `slug`, `source`, `sha`, `license`, and `installed_at` for the skills this script verified against the pin.

## Adding or changing a skill

Georgi reviews every addition and every pin bump. The change updates the vendored folder under `skills/vendor/<slug>/`, `skills/approved-skills.json`, `skills/project-profiles.json` when the profile list changes, and `automation/bootstrap-cursor-skills.test.mjs`.

Vercel skills ship a `NOTICE.md` because `vercel-labs/agent-skills` has no LICENSE file. The README and SKILL.md say MIT. Do not invent a LICENSE text for that repo. Other skills keep the upstream LICENSE next to `SKILL.md` (`LICENSE.txt` inside `frontend-design` is the upstream file).

## Failure

A non-zero exit is a failed handoff. Report stderr (and the JSON `error` field when `--json` was used). Do not hide it and do not start the coding agent.
