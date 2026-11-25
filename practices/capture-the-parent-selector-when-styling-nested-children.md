> Full index: [index-sass.md](index-sass.md)

# Capture `&` in a local variable when a nest must still point at the parent

**When to use**: When styling a child or pseudo from a deeper nest, or sharing one block across `data-type` modifiers, and a bare `&` would now mean the inner selector.

**Rule**: `&` is the parent of the **current** nest. If you move into a child and still need the outer selector (a parent `:hover` that restyles a child, or `.card[data-type="product"]` referring back to `.card__content`), save it first: `$parent: &;`. Use interpolation when that variable is part of a selector (`#{$parent}__content`, `#{$parent}:hover &`). This is easy to overuse and can hurt readability—comment it, and inspect the compiled CSS. Most days, prefer a trailing `&` or a shallower nest; keep this for the cases where `&` would otherwise silently bind to the wrong parent.

**Example**:
```scss
.card {
  $parent: &;
  &[data-type="product"] {
    #{$parent}__content { padding: 2rem; }
  }
}
```

**Avoid**: Nesting `&:hover` on a child and wondering why the hover target is the child, or sprinkling `$parent: &` through every block “just in case.”

**Source**: [Nested children — Beyond CSS](https://module-1.beyondcss.dev/lessons/nested-children), [The product card — Beyond CSS](https://module-1.beyondcss.dev/lessons/the-product-card)
