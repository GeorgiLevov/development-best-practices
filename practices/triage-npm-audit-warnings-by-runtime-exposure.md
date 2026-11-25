> Full index: [index-developer-mindset.md](index-developer-mindset.md)

# Triage `npm audit` alerts by runtime exposure instead of running `--force`

**When to use**: Whenever `npm install` or `npm audit` reports vulnerability counts in JavaScript/React projects.

**Rule**: Do not panic over large `npm audit` counts on frontend toolchains and never blindly run `npm audit fix --force`, which often downgrades top-level packages to broken or genuinely outdated versions. `npm audit` flags issues across build-time and dev-only dependencies (`parcel`, `webpack`, `svgo`, `postcss`) that never ship to end-user browsers or accept untrusted runtime input. Inspect the dependency path (`production` server/client runtime vs `devDependencies`/bundler), evaluate whether untrusted input can actually reach the vulnerable code path, and fix real runtime exposure deliberately.

**Example**:
```text
1. Check `npm audit --omit=dev` (production dependencies only).
2. Inspect the advisory path: does untrusted input hit this package at runtime,
   or is it only parsing local build-time assets?
3. Upgrade targeted packages consciously; skip `npm audit fix --force`.
```

**Avoid**: Treating `0 vulnerabilities` in `npm audit` on a frontend build pipeline as a hard deployment gate or running `npm audit fix --force` blindly.

**Source**: [npm audit: Broken by Design — Overreacted](https://overreacted.io/npm-audit-broken-by-design/), [Dev Server Setup — Joy of React](https://courses.joshwcomeau.com/joy-of-react/project-wordle/03-dev-server)
