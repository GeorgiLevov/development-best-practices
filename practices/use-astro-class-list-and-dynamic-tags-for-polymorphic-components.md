> Full index: [index-astro.md](index-astro.md)

# Use `class:list` and dynamic tags for polymorphic Astro components

**When to use**: When a component is sometimes a link and sometimes a button, or when callers need to pass modifier classes.

**Rule**: Pick the tag in frontmatter (`let Element = "button"; if (href) Element = "a";`) and render `<Element {href}>` so `href` is omitted when absent. Style `a, button` (or a shared class) because a tag-only `a` rule will not apply after the swap. For modifiers, interpolate classes in an expression (`class={`btn ${theme}`}`), not inside a quoted static string Astro will leave alone. `class:list` is the clean option when several optional classes must be combined. You cannot take a prop named `class` without remapping it (`class: className` or a `className` prop). Data-attribute modifiers (`data-type`) remain valid; choose one approach and be consistent.

**Example**:
```astro
---
const { href, theme, class: className } = Astro.props;
let Element = "button";
if (href) Element = "a";
---
<Element {href} class:list={["btn", theme, className]}>
  <slot />
</Element>
```

**Avoid**: Writing `class="btn {theme}"` (the braces stay literal), or leaving component CSS as `a { … }` after the root can also be a `button`.

**Source**: [Dynamic elements — Beyond CSS](https://module-5.beyondcss.dev/lessons/dynamic-elements), [Using multiple classes instead of data-attribute modifiers — Beyond CSS](https://module-5.beyondcss.dev/lessons/using-multiple-classes-instead-of-data-attribute-modifiers), [The class:list directive — Beyond CSS](https://module-5.beyondcss.dev/lessons/the-class-list-directive), [Dynamic HTML — Astro docs](https://docs.astro.build/en/basics/astro-syntax/#dynamic-html)
