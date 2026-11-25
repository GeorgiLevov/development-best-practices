> Full index: [index.md](index.md)

# Declare the root `font-family` on `html`, not inside the `*` universal selector

**When to use**: When setting a site's default typeface in global styles or a CSS reset.

**Rule**: Put the base `font-family` declaration on `html` (or `body`), never inside `* { ... }`. A universal `*` rule targets every element directly—overriding browser monospace defaults on `<code>`, `<pre>`, and `<kbd>` and forcing overrides everywhere—whereas setting it on `html` relies on inheritance and leaves component or element overrides trivial.

**Example**:
```css
* {
  box-sizing: border-box;
}
html {
  font-family: 'Raleway', sans-serif;
}
```

**Avoid**: Writing `* { font-family: sans-serif; }` in resets or starter stylesheets, which clobbers `<code>` and `<pre>` fonts.

**Source**: [variable-fonts-exercise (commit 07f3916) — CSS for JavaScript Developers](https://github.com/css-for-js/variable-fonts-exercise)
