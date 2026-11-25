> Full index: [index.md](index.md)

# Embed live playgrounds in technical docs

**When to use**: When authoring developer documentation, blogs, or interactive tutorials.

**Rule**: Pair technical explanations with live-editable code playgrounds (such as Sandpack) that offer Reset and Format controls, hide boilerplate aesthetics in secondary tabs, and provide one-click shareable sandboxes for bug reports.

**Example**:
```tsx
<SandpackProvider template="react" files={{ "/App.js": starterCode }}>
  <SandpackCodeEditor />
  <SandpackPreview />
</SandpackProvider>
```

**Avoid**: Dumping 100 lines of unrelated setup CSS into the primary example pane, obscuring the concept being taught.

**Source**: [Course Structure — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-introduction/02-structure), [Sandpack](https://sandpack.codesandbox.io/), [A World-Class Code Playground with Sandpack — Josh W. Comeau](https://www.joshwcomeau.com/react/next-level-playground/)
