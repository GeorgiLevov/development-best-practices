> Full index: [index-design-systems.md](index-design-systems.md)

# Model design tokens as global, contextual, and component layers

**When to use**: When turning a palette or type scale into a system that can change at the palette, role, or component without a rewrite.

**Rule**: Keep three layers. **Global** tokens are raw values with no usage (`$-clr-red-400`, `$font-size-400`); prefix Sass privates with `-` or `_` so they cannot be `@use`d elsewhere, and do not reference globals directly in component CSS. **Contextual** (alias) tokens name a role (`$color-text-default`, `$color-text-interactive-hover`). **Component** tokens are prefixed with the component (`$button-text-color-hover`) and point at contextual tokens, even when two of them currently share a value—so later changes stay local. A palette tweak, a “primary” reassignment, and a single-button exception then each have a correct place to land. This complements existing numbered-scale and CSS-variable practices; it does not replace them.

**Example**:
```scss
$-clr-red-400: hsl(0 70% 40%);
$color-primary: $-clr-red-400;          // contextual
$button-text-color: $color-primary;     // component
$button-text-color-hover: $color-primary;
```

**Avoid**: Using `$red-400` inside a button rule, or naming globals after the current hue so a rebrand leaves “green” variables pointing at purple.

**Source**: [Design tokens — Beyond CSS](https://module-4.beyondcss.dev/lessons/design-tokens), [Global tokens and private members — Beyond CSS](https://module-4.beyondcss.dev/lessons/global-tokens-and-private-members), [Contextual color tokens — Beyond CSS](https://module-4.beyondcss.dev/lessons/contextual-color-tokens)
