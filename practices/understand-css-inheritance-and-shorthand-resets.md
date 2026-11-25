> Full index: [index.md](index.md)

# Understand CSS inheritance, form control overrides, and shorthand resets

**When to use**: When debugging missing typography styles or unexpected `inherit` / shorthand declarations.

**Rule**: Remember that typography properties (`color`, `font-*`, `line-height`, `text-align`) inherit by default while box properties (`border`, `padding`, `margin`, `background`) do not. Explicitly set `font: inherit` and `color: inherit` on form controls (while keeping mobile `<input>` font sizes at least `16px` to prevent iOS auto-zoom), never pass `inherit` inside a CSS shorthand, and remember shorthands reset omitted sub-properties to `initial`.

**Example**:
```css
input, button, textarea, select {
  font: inherit;
  color: inherit;
}

/* Valid: explicit longhand inheritance */
.badge { border-color: inherit; }
```

**Avoid**: Writing invalid `border: 1px solid inherit` or using `font: 1.25rem sans-serif` expecting `font-weight` from an ancestor to survive.

**Source**: [CSS Inheritance: An Introduction — SitePoint](https://www.sitepoint.com/css-inheritance-introduction/#list-css-properties-inherit), [Built-in Styles and Inheritance — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/01-rendering-logic-1/01-built-ins-and-inheritance)
