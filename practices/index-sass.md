> Full index: [index.md](index.md)

# Sass Language, Modules & CLI Tooling

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

## CLI, Syntax & Comments

- [Install and watch Dart Sass from the CLI, not a stale GUI or LibSass extension](install-and-watch-dart-sass-from-the-cli.md): Use the official `sass` npm package (Dart Sass), `sass --watch`, and dev source maps; avoid unmaintained LibSass/Node-Sass extensions.
- [Choose SCSS or indented Sass deliberately, and use `//` for comments that must not ship](choose-scss-or-indented-sass-and-silent-comments.md): Prefer `.scss` when you also write CSS; `//` is stripped, `/* */` is compiled through.

## Nesting & the Parent Selector

- [Nest Sass selectors shallowly and always inspect the compiled CSS](nest-sass-selectors-shallowly-and-inspect-the-compiled-css.md): Stay around two levels, never emit a selector you would not type by hand, and watch property-nesting colons.
- [Use `&` for pseudos, BEM-style suffixes, and trailing parent context](use-the-parent-selector-for-pseudos-bem-and-trailing-context.md): `&:hover`, `&__title`, and `.inverted &` — a bare nested `:hover` compiles to a useless descendant.
- [Know where Sass nesting differs from native CSS nesting](know-where-sass-nesting-differs-from-native-css-nesting.md): Native CSS cannot form suffix selectors and uses `:is()` specificity; Sass will eventually compile nests through `:is()` too.
- [Nest media queries inside the selector and place them last](nest-media-queries-inside-the-selector-and-place-them-last.md): Keep queries with the component; repeated compiled `@media` blocks compress well.
- [Capture `&` in a local variable when a nest must still point at the parent](capture-the-parent-selector-when-styling-nested-children.md): `$parent: &` plus interpolation for `data-type` modifiers or a parent `:hover` that restyles a child.

## Variables, Color & Compile-Time Math

- [Treat Sass variables as compile-time values and scope them to their rule](treat-sass-variables-as-compile-time-and-scope-them-to-their-rule.md): Top-level `$vars` are allowed; a rule-scoped `$var` is not inherited like a custom property; use `$vars` for breakpoints.
- [Use Sass `rgb()` color tricks with a comma alpha, never with `var()`](use-sass-rgb-color-functions-with-comma-alpha-not-var.md): `rgb($hex, 0.5)` is a Sass helper; `rgb(var(--token), 0.5)` compiles but is invalid CSS.

## Mixins, Extends & Interpolation

- [Prefer mixins over `@extend`, and treat placeholder extends as a specificity hazard](prefer-mixins-over-extends-and-guard-selector-bloat.md): Extends merge selectors and can invent unexpected compounds; mixins repeat declarations and compress fine.
- [Write mixins with arguments, defaults, nested selectors, `@content`, and varargs last](write-mixins-with-arguments-defaults-selectors-and-content.md): Required parameters first, `$args...` last, and no mixing optional parameters with arbitrary arguments.
- [Interpolate identifiers with `#{}` and avoid slash division in Sass math](interpolate-identifiers-and-avoid-slash-division-in-sass.md): `#{$var}` in selectors; prefer `math.div()` or `calc()` over deprecated `/`.

## Modules, Loops, Functions & Maps

- [Import built-in Sass modules with `@use` before any compiled CSS](import-built-in-sass-modules-with-use-before-any-css.md): `@use "sass:color"` (and friends) at the top of the file; do not call deprecated global `lighten()`.
- [Generate repeated rules with `@for` and `@each`, and interpolate the loop variable](generate-repeated-rules-with-for-and-each-loops.md): `through` includes the end; unpack nested lists in `@each`.
- [Add Sass control flow with `@if` / `@else` and the global `if()` function](add-sass-control-flow-with-if-else-and-the-if-function.md): Use `and`/`or`, not `&&`/`||`; `@if` for blocks, `if()` for values.
- [Extract repeated Sass calculations into `@function`s that `@return` a value](extract-repeated-sass-calculations-into-returning-functions.md): Functions return; mixins emit declarations or `@content`.
- [Validate mixin arguments with maps, `sass:meta`, and `@error`](validate-mixin-arguments-with-maps-meta-and-error.md): A total `mq()` mixin accepts a map key or a unit-bearing length and errors on typos or unitless numbers.
