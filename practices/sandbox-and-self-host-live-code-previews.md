> Full index: [index.md](index.md)

# Sandbox and self-host live code previews

**When to use**: When running user-editable code playgrounds in a web application.

**Rule**: Execute user-edited code inside a cross-origin `<iframe>` so scripts cannot read your main domain's cookies or `localStorage`. Self-host the bundler if uptime independence matters, and note that service-worker-based static previews can break under strict third-party cookie blockers.

**Example**:
```tsx
<Sandpack
  options={{ bundlerURL: "https://bundler.example.com" }}
/>
```

**Avoid**: Executing arbitrary playground scripts in the same origin as authenticated user sessions.

**Source**: [A World-Class Code Playground with Sandpack — Josh W. Comeau](https://www.joshwcomeau.com/react/next-level-playground/)
