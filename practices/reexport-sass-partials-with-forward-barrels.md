> Full index: [index-css-architecture.md](index-css-architecture.md)

# Re-export Sass partials through `@forward` barrels

**When to use**: When many files need the same abstracts, or when a folder should be loaded with a single `@use`.

**Rule**: `@forward` collects members so downstream files can `@use` one entry point instead of every partial. A forwarded file does not use those members itself and adds no namespace of its own; the namespace comes from the file you `@use`. Put the forwards in `_index.scss` so `@use "abstracts"` loads the folder. Optionally limit the public API with `@forward "colors" show $clr-primary` or `hide $clr-red`; private members (`$-clr-red` or `$_clr-red`) stay inside their file without listing names. `@import` is deprecated (no namespacing, last definition wins). Use it only on legacy Node-Sass projects, and prefer the Sass migrator when moving to Dart Sass. Built-in module `@use` is covered in the Sass language index.

**Example**:
```scss
// sass/abstracts/_index.scss
@forward "breakpoints";
@forward "colors";
@forward "mixins";

// sass/components/_buttons.scss
@use "../abstracts" as *;
```

**Avoid**: `@use "abstracts/abstracts"` just to work around a missing `_index.scss`, or starting new work with `@import`.

**Source**: [@forward — Beyond CSS](https://module-3.beyondcss.dev/lessons/forward), [What happened to @import? — Beyond CSS](https://module-3.beyondcss.dev/lessons/what-happened-to-import), [Global tokens and private members — Beyond CSS](https://module-4.beyondcss.dev/lessons/global-tokens-and-private-members), [Sass migrator](https://sass-lang.com/documentation/cli/migrator)
