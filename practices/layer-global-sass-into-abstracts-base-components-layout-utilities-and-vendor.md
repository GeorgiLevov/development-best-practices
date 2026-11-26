> Full index: [index-css-architecture.md](index-css-architecture.md)

# Layer global Sass into abstracts, base, components, layout, utilities, and vendor

**When to use**: When a multi-page or marketing site needs a shared stylesheet rather than per-component scoped CSS.

**Rule**: Split compiled CSS by job, in the spirit of CUBE CSS and the 7-1 pattern: **abstracts** (tokens, maps, mixins, functions—no emitted CSS), **base** (reset, fonts, element styles), **components**, **layout** (tracks and regions, not a card’s look), **utilities**, and **vendor**. Give each folder an `_index.scss` barrel. `main.scss` `@use`s the compiled layers only, in cascade order—vendor first if you will override it. On modern browsers you may also assign those folders to CSS `@layer`. Do not skip this structure because the project “is small”; small sites grow. Keep layout rules in layout partials and appearance tweaks in a component partial (for example an offset grid vs its featured-card skin). Component-scoped CSS remains a better default inside app UIs—see that practice.

**Example**:
```scss
// sass/main.scss — order is the compiled cascade
@use "vendor";
@use "base";
@use "layout";
@use "components";
@use "utilities";
```

**Avoid**: One ever-growing `style.scss`, putting abstracts into `main.scss` “so they compile,” or restyling a layout object with one-off visual rules that belong on a component.

**Source**: [Architecture — Beyond CSS](https://module-3.beyondcss.dev/lessons/architecture), [A good starting point — Beyond CSS](https://module-3.beyondcss.dev/lessons/a-good-starting-point), [CUBE CSS](https://cube.fyi/), [The 7-1 pattern — Sass Guidelines](https://sass-guidelin.es/#the-7-1-pattern), [Cascade layers and preprocessor includes — Smashing Magazine](https://www.smashingmagazine.com/2022/01/introduction-css-cascade-layers/#combining-cascade-layers-and-preprocessor-includes)
