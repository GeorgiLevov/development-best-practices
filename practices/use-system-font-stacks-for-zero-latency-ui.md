> Full index: [index.md](index.md)

# Use system font stacks when zero latency and native feel come first

**When to use**: When building dashboards, docs, or offline-first apps where speed and native OS crispness beat custom branding.

**Rule**: When web-font download overhead or FOUT is undesirable, define a cross-platform system font stack (e.g., `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`, or `system-ui` with fallback fonts) in a reusable CSS variable so typography renders immediately with zero network requests.

**Example**:
```css
html {
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
body { font-family: var(--font-sans); }
```

**Avoid**: Downloading hundreds of kilobytes of generic sans-serif web fonts for an internal tool when local OS UI fonts render faster and cleaner.

**Source**: [Font Stacks — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/06-typography-and-media/07-font-stacks)
