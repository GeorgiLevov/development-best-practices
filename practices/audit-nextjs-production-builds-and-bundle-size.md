> Full index: [index-react-fullstack.md](index-react-fullstack.md)

# Test production builds locally and audit client bundle impact with `@next/bundle-analyzer`

**When to use**: When configuring project imports, verifying caching/rendering behavior before deploying, or evaluating third-party client libraries.

**Rule**: Configure `@/*` path aliases in `jsconfig.json`/`tsconfig.json` to prevent brittle `../../../` imports. Never judge Next.js caching, static generation, or bundle size from `npm run dev`: run `npm run build && npm run start` locally to verify production behavior. Keep `"start": "next start"` unmodified for hosting platforms and add `"start:local": "next start -p 4004"` (or similar) if port `3000` collides locally. Inspect real client chunk sizes with `@next/bundle-analyzer` (plus `cross-env` for cross-platform `ANALYZE=true` scripts) and check Bundle Phobia for tree-shaking and peer dependencies before shipping heavy client packages.

**Example**:
```json
// package.json: preserve standard "start" for hosting; add local port override + analyzer
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "start:local": "next start -p 4004",
    "analyze": "cross-env ANALYZE=true next build"
  }
}
```

**Avoid**: Changing `"start"` to a hardcoded local port that breaks production hosts, or assuming `next dev` reflects production static caching and minified client bundle sizes.

**Source**: [Building and Starting — Joy of React](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/06.02-building-and-starting), [Bundle Analysis — Joy of React](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/06.03-bundle-analysis), [Path Aliases — Joy of React](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/06.01-path-aliases)
