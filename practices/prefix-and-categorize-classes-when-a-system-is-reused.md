> Full index: [index-design-systems.md](index-design-systems.md)

# Prefix and categorize classes when a design system is reused or dropped into legacy CSS

**When to use**: When the same Sass system ships in more than one site, lands beside older unprefixed CSS, or needs a clear boundary between utilities, components, and layouts.

**Rule**: Optional but useful: store a short `$prefix` (about 2–4 characters, hyphen included if you want) and nest selectors as `.#{$prefix} { &card {} }` so a single token retitles the system per client. Prefixing marks “this came from the system,” which is especially helpful next to legacy unprefixed rules. Do **not** prefix raw element selectors in `base/` (or a generic `label`/`input`). Categorizing is separate: CUBE-style grouping by folder is enough for many teams; others add `c-` / `u-` (or a global prefix plus a category) or more verbose names such as `.kp-c-text-link`. Customize a new project at the token layer before forking component CSS, and make exceptions consciously—the system is yours, not a sealed third-party framework.

**Example**:
```scss
$prefix: "kp-";

.#{$prefix} {
  &card { /* compiles to .kp-card */ }
}
```

**Avoid**: Prefixing `h1` or `input` (the selector becomes invalid or useless), or inventing a new component file for a change that a token already controls.

**Source**: [Prefixing — Beyond CSS](https://module-4.beyondcss.dev/lessons/prefixing), [Categorizing your classes — Beyond CSS](https://module-4.beyondcss.dev/lessons/categorizing-your-classes), [Reusability — Beyond CSS](https://module-4.beyondcss.dev/lessons/reusability), [Making the template your own — Beyond CSS](https://module-4.beyondcss.dev/lessons/making-the-template-your-own), [Making decisions on how we use this system — Beyond CSS](https://module-4.beyondcss.dev/lessons/making-decisions-on-how-we-use-this-system), [CUBE CSS](https://cube.fyi/), [Atomic Design — Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
