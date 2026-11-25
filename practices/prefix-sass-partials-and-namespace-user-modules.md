> Full index: [index-css-architecture.md](index-css-architecture.md)

# Prefix Sass partials with `_` and namespace user modules at `@use`

**When to use**: When splitting a stylesheet into more than one file, or when watching a whole Sass folder with the CLI.

**Rule**: Start every helper file with an underscore (`_colors.scss`) so Sass treats it as a partial and does not emit a sibling `.css` file—especially under `sass --watch sass:css`, which compiles every non-partial in the folder. Load a partial with `@use` and a **relative** path; you may omit the underscore and the extension (`@use "layout/container"`). The default namespace is the filename, not the folder: `colors.$red`. Shorten it with `as c`, or strip it with `as *` for modules you own and trust. Mix `.scss`, `.sass`, and `.css` only while migrating; do not keep mixed syntaxes long-term. Abstracts (variables, mixins, functions) produce no CSS—`@use` them in the files that need them. Compiled layers should enter the build once, usually from `main.scss`.

**Example**:
```scss
// sass/abstracts/_colors.scss
$red: #c00;

// sass/main.scss
@use "abstracts/colors" as c;

body { background: c.$red; }
```

**Avoid**: Watching a folder of un-prefixed `.scss` files, expecting `@import`-style globals to appear without a namespace, or putting `@use` after compiled CSS.

**Source**: [Building our own Sass modules — Beyond CSS](https://module-3.beyondcss.dev/lessons/use-and-forward), [Using, and name-spacing, our partial files — Beyond CSS](https://module-3.beyondcss.dev/lessons/using-and-name-spacing-our-partial-files), [Why bother with partial files — Beyond CSS](https://module-3.beyondcss.dev/lessons/why-bother-with-partial-files)
