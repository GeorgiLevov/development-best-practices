> Full index: [index.md](index.md)

# Tint native checkboxes, radios, ranges, and progress with `accent-color`

**When to use**: When native form controls clash with the brand palette but don't need a full custom rebuild.

**Rule**: Set `accent-color` (on `:root` or a form) to tint checkboxes, radio buttons, range sliders, and `<progress>` while keeping native semantics, states, and accessibility (~97% support). Trust the browser to pick a contrasting check/thumb color, and combine with `color-scheme: light dark` for dark themes. Rebuild a control only when the design truly requires it.

**Example**:
```css
:root {
  color-scheme: light dark;
  accent-color: hsl(330deg 100% 45%);
}
```

**Avoid**: Rebuilding checkboxes or radios from `<div>`s or `<button>`s just to change their color, losing indeterminate, keyboard, and form behaviour.

**Source**: [Accent Colors — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/04.03-accent-colors), [CSS accent-color — web.dev](https://web.dev/accent-color/), [CSS UI Level 4 — accent-color](https://www.w3.org/TR/css-ui-4/#widget-accent), [accent-color — Can I use](https://caniuse.com/mdn-css_properties_accent-color)
