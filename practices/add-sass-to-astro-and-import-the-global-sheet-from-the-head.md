> Full index: [index-astro.md](index-astro.md)

# Add Sass to Astro and import the global stylesheet from the head component

**When to use**: When an Astro site should use the same Sass pipeline you already have, or when a component needs `lang="scss"` scoped styles plus shared abstracts.

**Rule**: Astro runs on Vite, so `npm i -D sass` is enough. Import the global sheet from the head component (`import "../styles/main.scss"`) so Vite compiles it—do not rely on a raw `<link>` to an unbuilt `.scss` file. For scoped styles, set `<style lang="scss">` (or `sass`) and `@use` abstracts from there just as in a partial; keep tokens in a shared file rather than redeclaring them in the component. The layered `styles/` tree can stay exactly as it was in the Vite starter.

**Example**:
```astro
---
import "../styles/main.scss";
---
```

```astro
<style lang="scss">
  @use "../styles/abstracts" as *;
  nav { background: $color-primary-800; }
</style>
```

**Avoid**: Linking a `.scss` file as if it were already CSS, or copying `$` tokens into every component style block.

**Source**: [CSS and Astro — Beyond CSS](https://module-5.beyondcss.dev/lessons/css-and-astro), [Adding Sass to an Astro project — Beyond CSS](https://module-5.beyondcss.dev/lessons/adding-sass-to-an-astro-project), [Scoped styles & Sass — Beyond CSS](https://module-5.beyondcss.dev/lessons/scoped-styles-amp-sass), [astro-sass-template](https://github.com/kevin-powell/astro-sass-template)
