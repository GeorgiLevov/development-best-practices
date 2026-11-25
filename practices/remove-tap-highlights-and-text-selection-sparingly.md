> Full index: [index.md](index.md)

# Remove mobile tap highlights and text selection only when you provide feedback

**When to use**: When a custom pressable button already shows clear press feedback on touch devices.

**Rule**: Use `-webkit-tap-highlight-color: transparent` to suppress the gray tap rectangle and `user-select: none` to stop iOS long-press text selection only on controls with their own obvious pressed state. These properties disable browser usability features, so apply them narrowly to specific components, never globally.

**Example**:
```css
.pushable {
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}
.pushable:active .front {
  transform: translateY(-2px);
}
```

**Avoid**: `* { user-select: none; -webkit-tap-highlight-color: transparent; }` resets that remove feedback and prevent users from copying text.

**Source**: [Mobile UX Improvements — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/06-mobile-ux)
