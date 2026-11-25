> Full index: [index-astro.md](index-astro.md)

# Scope styles on nested Astro components and keep the rest in Sass partials

**When to use**: When deciding whether a piece of UI should be an `.astro` component with a `<style>` block or remain a Sass partial in the layered architecture.

**Rule**: You can keep the entire layered Sass tree and import it globally—that still works. Scoped styles earn their keep when markup, styles, and a little script should live in one file. A practical split: if the UI has nested elements (header, nav, card, footer), make an Astro component with scoped Sass; leave typography, utilities, layout objects, and tokens as partials. Buttons can go either way; many teams still componentize them. Two official starters show the fork: `astro-sass-template` scopes component styles, `astro-sass-template-no-scoped-styles` keeps a `styles/components/` layer. Do not invent an Astro component for every heading or utility class. This complements—not replaces—the component-app default of scoped CSS.

**Example**:
```text
src/components/SiteHeader.astro   # markup + scoped <style lang="scss">
src/styles/utilities/_flow.scss   # stays a partial
src/styles/abstracts/_tokens.scss
```

**Avoid**: Moving the whole design system into per-page `<style>` blocks, or wrapping every utility in a one-line Astro component.

**Source**: [When to use scoped styles — Beyond CSS](https://module-5.beyondcss.dev/lessons/when-to-use-scoped-styles), [Sass partials (Astro) — Beyond CSS](https://module-5.beyondcss.dev/lessons/sass-partials-astro), [astro-sass-template](https://github.com/kevin-powell/astro-sass-template), [astro-sass-template-no-scoped-styles](https://github.com/kevin-powell/astro-sass-template-no-scoped-styles)
