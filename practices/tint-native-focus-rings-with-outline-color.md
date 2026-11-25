> Full index: [index.md](index.md)

# Rely on `:focus-visible` defaults and tint focus rings with `outline-color`

**When to use**: When focus rings clash with a theme, or someone asks to remove focus outlines on mouse click.

**Rule**: Modern browsers already apply default focus rings via `:focus-visible`, so mouse and touch users don't see them on buttons and links; there's no reason to remove outlines. To theme the ring, change only `outline-color`, which keeps the recognizable native focus style where supported (Chrome) and degrades harmlessly elsewhere. Avoid overriding with `outline: 2px solid` unless the replacement is higher-contrast. Debug focus with a DevTools Live Expression of `document.activeElement`.

**Example**:
```css
a,
button {
  outline-color: hsl(330deg 100% 45%);
}
/* DevTools Console > Create live expression: document.activeElement */
```

**Avoid**: `button { outline: none; }` resets, or replacing native focus rings with solid outlines that look like ordinary borders.

**Source**: [Focus Improvements — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/11-focus), [Focus Visible — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/11.01-focus-visible), [Focus Outlines — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/11.03-focus-outlines), [Watch JavaScript values in real time with Live Expressions — Chrome for Developers](https://developer.chrome.com/docs/devtools/console/live-expressions/), [CSS outline properties — Can I use](https://caniuse.com/outline)
