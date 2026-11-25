> Full index: [index.md](index.md)

# Astro, Content Collections, Tina & Sass

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

## Layouts, Sass & Scoped Styles

- [Wrap Astro pages in a layout with slots and frontmatter props](wrap-astro-pages-in-a-layout-with-slots-and-props.md): `BaseLayout` + `<slot />` + props into `BaseHead`.
- [Add Sass to Astro and import the global stylesheet from the head component](add-sass-to-astro-and-import-the-global-sheet-from-the-head.md): `sass` as a dev dependency; Vite-processed import; `@use` abstracts from `lang="scss"` blocks.
- [Treat Astro scoped styles as file-local and opt into global explicitly](treat-astro-scoped-styles-as-file-local-and-opt-into-global-explicitly.md): Slotted page content is not in scope; use `is:global` or `:global()`, and wrap comma lists in `:is()`.
- [Scope styles on nested Astro components and keep the rest in Sass partials](scope-styles-on-nested-astro-components-and-keep-the-rest-in-sass-partials.md): Nested UI becomes a component; tokens, utilities, and layout objects stay partials.

## Components, Collections, Tina & Metadata

- [Use `class:list` and dynamic tags for polymorphic Astro components](use-astro-class-list-and-dynamic-tags-for-polymorphic-components.md): `a` vs `button` from `href`; interpolate classes; remap the `class` prop.
- [Define Astro content collections and generate pages from them](define-astro-content-collections-and-generate-pages-from-them.md): `defineCollection` + schema, `getCollection` / `getStaticPaths`, tag routes with safe slugs.
- [Parameterize collection excerpts and omit empty markup](parameterize-collection-excerpts-and-omit-empty-markup.md): One preview component with `excerptLength`; no empty paragraph when the length is 0.
- [Model Tina CMS collections with real paths, references, and honest field UI](model-tina-cms-collections-with-paths-references-and-field-ui.md): Point Tina at real content; `reference` fields for authors; textarea vs rich text.
- [Set Open Graph and SEO tags in the Astro document head](set-open-graph-and-seo-tags-in-the-astro-document-head.md): Per-page title/description/image; avoid duplicate `<title>` tags; preview in dev.
