> Full index: [index.md](index.md)

# Inspect inactive CSS hints in DevTools

**When to use**: When a CSS declaration appears to have no effect on an element.

**Rule**: Open DevTools (`Cmd+Opt+I` on macOS, `Ctrl+Shift+I` on Windows/Linux) and check the Styles pane for crossed-out overrides and grayed-out inactive CSS warnings (supported in Firefox and Chrome 108+), which explain unmet property dependencies.

**Example**:
```text
1. Right-click element -> Inspect.
2. Look for dimmed properties with info icons explaining why a rule is inactive (e.g., `gap` without flex/grid, or `z-index` on static positioning).
```

**Avoid**: Adding `!important` or random properties before checking DevTools for why a declaration is inactive or overridden.

**Source**: [Debugging in the Browser — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/09-debugging)
