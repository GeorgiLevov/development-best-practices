> Full index: [index-sass.md](index-sass.md)

# Know where Sass nesting differs from native CSS nesting

**When to use**: When mixing `.scss` and native CSS nesting, or deciding whether a suffix selector can move to plain CSS.

**Rule**: In Sass, `&` is compiled away, so `&__title` becomes a single class (`.header__title`). In native CSS, `&` is a live placeholder, so the same code is equivalent to a compound `__title.header` and **cannot** form suffix selectors. Specificity can also diverge: Sass expands `#main, article { h2 {} }` to `#main h2, article h2` (the article branch stays an element + descendant). Native CSS implements nesting with `:is()`, so `:is(#main, article) h2` gives **both** branches the specificity of the ID. A trailing `&` under a descendant parent (`.foo .bar { .theme & {} }`) likewise becomes `.theme :is(.foo .bar)` in CSS, which can match a different tree than Sass’s `.theme .foo .bar`. The Sass team plans to compile nesting through `:is()` once support is ~98%—a breaking change their migrator will help with—while keeping suffix-selector support. Until then, do not assume a `.scss` nest and a `.css` nest mean the same selector.

**Example**:
```scss
// Sass today: .header__title
// Native CSS: invalid/compound, not a suffix class
.header {
  &__title { font-size: 2rem; }
}
```

**Avoid**: Copying BEM suffix nests into a `.css` file, or ignoring `:is()` specificity when the parent list mixes IDs and elements.

**Source**: [Sass/SCSS Nesting vs. CSS nesting — Beyond CSS](https://module-1.beyondcss.dev/lessons/sass-scss-nesting-vs-css-nesting), [Sass and native nesting](https://sass-lang.com/blog/sass-and-native-nesting/#the-plan-for-sass)
