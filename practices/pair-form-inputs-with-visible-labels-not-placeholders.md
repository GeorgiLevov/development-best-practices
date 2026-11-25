> Full index: [index.md](index.md)

# Pair form controls with visible `<label>` elements, not placeholders

**When to use**: When designing or implementing text inputs, search bars, selects, or sign-up forms.

**Rule**: Never use `placeholder` text as a substitute for a visible `<label>`: placeholders disappear once the user types, fail color-contrast defaults, cannot be clicked to focus, and degrade screen-reader usability. Always render a persistent `<label htmlFor="...">` (or wrap the control) and use `placeholder` only for secondary format hints like `"you@example.com"`.

**Example**:
```jsx
<label htmlFor="email-input">Email address</label>
<input id="email-input" type="email" placeholder="you@example.com" />
```

**Avoid**: Shipping compact forms with label-less inputs that rely solely on placeholder strings.

**Source**: [Fluid Design: Labels vs. Placeholders — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/17-fluid-design)
