> Full index: [index.md](index.md)

# CSS Architecture, Sass Modules & Build Tooling

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

## Partials, `@use` / `@forward` & Layered Architecture

- [Prefix Sass partials with `_` and namespace user modules at `@use`](prefix-sass-partials-and-namespace-user-modules.md): Underscore partials so folder watches do not emit extra CSS; `@use` with a filename namespace, `as`, or `as *`.
- [Re-export Sass partials through `@forward` barrels](reexport-sass-partials-with-forward-barrels.md): `_index.scss` lets `@use "abstracts"` load a folder; `show`/`hide` and `$-` privates bound the API; skip deprecated `@import`.
- [Layer global Sass into abstracts, base, components, layout, utilities, and vendor](layer-global-sass-into-abstracts-base-components-layout-utilities-and-vendor.md): CUBE/7-1 layering for multi-page stylesheets; `main.scss` order is the cascade; keep look out of layout objects.

## Utilities, Starters, Vite & PostCSS

- [Generate utility classes from Sass token maps](generate-utility-classes-from-sass-token-maps.md): `@each` keeps utilities in lockstep with tokens; theme-aware utilities must use custom properties.
- [Keep a reusable Sass starter and clone it with degit or a GitHub template](keep-a-reusable-sass-starter-and-clone-it-with-degit.md): Publish the system as a template and copy it with `degit` rather than rebuilding abstracts each time.
- [Compile multi-page Sass sites with Vite, not only a Sass CLI watch](compile-multi-page-sass-sites-with-vite.md): List HTML entries, pretty-URL folders, and a `src/` root; inspect compiled CSS with the Sass CLI while learning.
- [Use `postcss-preset-env` at stage 3 and add features deliberately](use-postcss-preset-env-at-stage-3-and-add-features-deliberately.md): Stage 3 plus explicit features and a browserslist; PurgeCSS only against real markup; no layout polyfills.
