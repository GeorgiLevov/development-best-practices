> Full index: [index.md](index.md)

# Design Systems, Tokens & Theming

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

## Token Layers & File Organization

- [Model design tokens as global, contextual, and component layers](model-tokens-as-global-contextual-and-component-layers.md): Raw privates, role aliases, then `$button-*` tokens; change the layer that matches the decision.
- [Keep contextual and component tokens in a dedicated `_tokens` partial](keep-contextual-tokens-in-a-dedicated-tokens-partial.md): Globals stay in color/type/size files; aliases and component knobs live together in `_tokens.scss`.

## Theming, Prefixing & Reuse

- [Theme by swapping palettes into CSS custom properties, not by baking Sass variables](theme-by-swapping-contextual-tokens-and-custom-properties.md): `$active-theme` maps, `:root` custom properties, `prefers-color-scheme` or a class toggle, and a compile flag to opt out.
- [Prefix and categorize classes when a design system is reused or dropped into legacy CSS](prefix-and-categorize-classes-when-a-system-is-reused.md): A short `$prefix`, no prefixed element selectors, optional `c-`/`u-` or CUBE grouping, and token-first customization.
