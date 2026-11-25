> Full index: [index.md](index.md)

# CSS Fundamentals & Layout

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

## CSS Fundamentals

- [Use exact CSS style-rule terminology](learn-css-rule-terminology.md): Distinguish selector, declaration, property, and value when reading specs and DevTools.
- [Prefer external stylesheets over inline styles](prefer-external-stylesheets-over-inline-styles.md): Place CSS in external or component-scoped stylesheets instead of inline style attributes.
- [Separate CSS multi-value tokens with whitespace](separate-css-values-with-whitespace.md): Keep property names unbroken and separate multi-value tokens with whitespace.
- [Always terminate CSS declarations with semicolons](always-terminate-css-declarations-with-semicolons.md): End every CSS declaration with a semicolon so the next declaration is not invalidated.
- [Distinguish media features from CSS properties](distinguish-media-features-from-css-properties.md): Query only supported media features inside @media conditions, not arbitrary CSS properties.
- [Co-locate media queries with CSS nesting](colocate-media-queries-with-css-nesting.md): Nest responsive @media overrides inside the component rule they modify instead of splitting files by breakpoint.
- [Media queries evaluate against the iframe viewport](media-queries-evaluate-against-iframe-viewport.md): Remember that @media breakpoints measure an iframe's inner width, not the outer browser window.
- [Prefer CSS pseudo-classes over JS for UI state](prefer-pseudo-classes-over-js-for-ui-state.md): Use CSS pseudo-classes (:hover, :focus, :checked, :invalid) instead of JS listeners for UI states.
- [Choose `:first-of-type` vs `:first-child` intentionally](choose-child-vs-of-type-pseudo-classes.md): Use :first-of-type/:last-of-type instead of :first-child/:last-child when mixed tag types share a parent.
- [Prevent trailing margin with `:last-child`](prevent-trailing-margin-with-last-child.md): Remove bottom margin on :last-child (or space only between siblings) to keep container padding symmetrical.
- [Keep `::before` and `::after` content decorative only](keep-pseudo-element-content-decorative-only.md): Limit ::before/::after to decorative visuals with empty content; put meaningful text in HTML.
- [Prefer child combinator `>` for shallow targets](prefer-child-combinator-over-descendant-for-shallow-targets.md): Use > instead of a space descendant selector when nested subcomponents must not inherit the rule.
- [Use contextual combinators before adding extra classes](use-contextual-combinators-before-adding-classes.md): Target contextual elements with semantic ancestor combinators instead of adding classes to every tag.
- [Adopt a modern CSS reset and own every rule](adopt-a-modern-css-reset-and-own-it.md): Start with a concise, understandable reset that protects `<dialog>` margins, media sizing, and root isolation.
- [Use `box-sizing: border-box` universally](use-border-box-sizing-universally.md): Apply `box-sizing: border-box` to all elements and pseudo-elements so padding and borders stay inside declared sizes.
- [Understand CSS inheritance, form control overrides, and shorthand resets](understand-css-inheritance-and-shorthand-resets.md): Inherit fonts onto form controls, avoid `inherit` in shorthands, and remember shorthands reset omitted sub-properties.
- [Keep CSS specificity flat and rely on cascade order](manage-specificity-and-cascade-order.md): Use flat specificity and CSS stylesheet source order instead of IDs, HTML class order myths, or `!important`.
- [Prefer CSS logical properties for directional styles](prefer-css-logical-properties-for-directional-styles.md): Use `inline`/`block` logical properties so spacing and borders adapt across LTR, RTL, and writing modes.
- [Use `outline` or transparent borders to prevent hover/focus layout shift](use-outline-for-zero-layout-shift-highlights.md): Highlight states with `outline` or pre-reserved transparent borders instead of layout-shifting hover borders.
- [Use `<blockquote>`, `<q>`, and `<cite>` strictly for real quotations](use-blockquote-q-and-cite-semantically.md): Reserve quote elements for genuine quotations and `<cite>` for creative works, never decorative callouts.
- [Inherit border, outline, and icon colors with `currentColor`](inherit-border-color-with-currentcolor.md): Omit `border-color` (or pass `currentColor`) so borders, outlines, and SVG strokes track computed text `color`.

## Layout, Flow & Positioning

- [Match `display: block`, `inline`, and `inline-block` to Flow layout rules](understand-flow-layout-block-inline-and-inline-block.md): Know which display modes honor `width`, `height`, wrapping, and vertical margins/padding in Flow layout.
- [Use `ch` for reading line lengths and `fit-content` for intrinsic widths](use-fit-content-and-ch-for-readable-measures.md): Cap prose lines at `60ch–70ch` and shrink-wrap blocks with `fit-content` instead of fixed widths.
- [Center constrained block elements with `margin-inline: auto`](center-block-elements-with-margin-auto.md): Center sized blocks horizontally with `margin-inline: auto` (noting vertical `auto` is `0` in Flow layout).
- [Reserve negative margins for full-bleed or overlap effects](use-negative-margins-for-bleed-not-general-spacing.md): Use negative inline margins on `width: auto` blocks for container-bleed banners, not sloppy sibling spacing fixes.
- [Predict and prevent unintended vertical margin collapse](predict-and-prevent-vertical-margin-collapse.md): Expect adjacent Flow vertical margins to collapse (including across parents) and isolate with `display: flow-root` or Flex/Grid.
- [Apply vertical Flow margins in a single consistent direction](apply-vertical-margins-in-one-direction.md): Push Flow siblings consistently in one vertical direction so spacing stays predictable.
- [Anchor `position: absolute` children with an explicit `position: relative` parent](anchor-absolute-elements-with-relative-parent.md): Explicitly mark the intended containing block `position: relative` so absolute children never drift to the root.
- [Center sized positioned elements with `inset: 0` and `margin: auto`](center-positioned-elements-with-inset-and-margin-auto.md): Center sized `absolute`/`fixed` elements with `inset: 0; margin: auto` so `transform` remains free for motion.
- [Understand stacking contexts before raising `z-index`](understand-stacking-contexts-before-raising-z-index.md): Check for `opacity`, `transform`, `filter`, and parent stacking contexts before escalating `z-index`.
- [Contain `z-index` with `isolation: isolate` and DOM order](contain-z-index-with-isolation-isolate-and-dom-order.md): Rely on DOM order, small tokenized `z-index` values, and `isolation: isolate` to contain component layers.
- [Avoid `transform` or `filter` on ancestors of `position: fixed` elements](avoid-transforms-or-filters-on-ancestors-of-fixed-elements.md): Keep `position: fixed` elements outside transformed or filtered ancestors so they stay anchored to the viewport.
- [Prefer `overflow: clip` over `hidden` and guard `position: sticky` ancestors](prefer-overflow-clip-over-hidden-and-watch-sticky-containers.md): Use `overflow: clip` when you only want visual trimming, and keep `overflow: hidden`/`auto` off `position: sticky` ancestors.
- [Wrap text around images and shapes with `shape-outside`](wrap-text-around-shapes-with-shape-outside.md): Float with `inline-start` and wrap prose around circles, polygons, or image alpha.
- [Contain floats with `display: flow-root` or a clearfix](contain-floats-with-flow-root-or-a-clearfix.md): Make parents wrap floated children with `display: flow-root` or a clearfix.
- [Separate `position: sticky` tracks from `overflow: hidden` content containers](separate-sticky-tracks-from-overflow-hidden-siblings.md): Keep `position: sticky` rails in a parallel unclipped wrapper when the main content container uses `overflow: hidden`.

## Flexbox Layout

- [Choose Flexbox for 1D dynamic distribution and fluid rows](choose-flexbox-for-1d-dynamic-distribution.md): Use Flexbox to distribute, align, and wrap items along a single row or column axis.
- [Align flex items with `justify-content`, `align-items`, and `align-self`](align-flex-items-with-justify-align-and-baseline.md): Use `justify-content` on the primary axis, `align-items`/`align-self` on the cross axis, and guard `baseline` inputs.
- [Size flex items with `flex-basis`, `flex-grow`, and `flex-shrink`](size-flex-items-with-flex-basis-grow-and-shrink.md): Understand how `flex: 1` overrides `width`, and distinguish `flex-shrink: 0` from `min-width`.
- [Build breakpoint-free responsive rows with `flex-wrap` and `flex`](build-intrinsic-responsive-rows-with-flex-wrap.md): Pair `flex-wrap: wrap` with `flex: 1 1 <basis>` so cards or nav items wrap and fill naturally without media queries.
- [Use `gap` and `margin: auto` to space and split flex items](use-flex-gap-and-auto-margins-for-spacing.md): Space flex siblings with `gap` and push opposing item groups apart with `margin-inline-start: auto`.
- [Keep DOM order aligned with visual flex order](keep-dom-order-aligned-with-visual-flex-order.md): Avoid `row-reverse`, `column-reverse`, and CSS `order` for meaningful content so keyboard Tab order matches visuals.
- [Predict how Flexbox interacts with `position`, margins, `z-index`, and `min-width`](predict-flex-interactions-with-position-margins-and-z-index.md): Know that flex items ignore margin collapse, accept `z-index` without `position`, and resist shrinking below `min-content`.
- [Fix non-sticking `position: sticky` flex children with `align-self: flex-start`](fix-sticky-elements-in-flex-containers-with-align-self-start.md): Prevent Flexbox's default `stretch` alignment from locking a sticky sidebar to full container height.
- [Prevent overstuffed centered flex containers from clipping start items](prevent-overstuffed-centered-flex-scroll-clipping.md): Use `margin: auto` or `safe center` instead of bare `justify-content: center` on overflowing scrollable flex boxes.
- [Apply `border-radius` directly to images instead of clipping card wrappers](round-image-corners-directly-to-preserve-overflowing-badges.md): Round `<img>` corners directly so overlapping badges, flags, or focus rings are not sliced off by `overflow: hidden`.
- [Build custom radio and checkbox tiles by overlaying native inputs](style-custom-radio-and-checkbox-tiles-with-overlay-inputs.md): Keep native keyboard and form UX by stretching `appearance: none` inputs over `<label>` tiles via `inset: 0`.
- [True-center a middle header slot with symmetric `flex: 1` sides or `1fr auto 1fr`](center-middle-header-item-with-symmetric-flex-or-grid-tracks.md): True-center a header's middle nav or logo using symmetric `flex: 1` sides or a `1fr auto 1fr` grid.

## CSS Grid Layout

- [Choose CSS Grid for 2D tracks, consistent columns, and layered cells](choose-css-grid-for-2d-tracks-and-overlapping-layers.md): Treat Grid tracks as invisible CSS markers and overlap items in one cell without `position: absolute`.
- [Define grid tracks with `fr`, `repeat()`, `gap`, and explicit vs implicit sizing](build-explicit-grid-tracks-with-fr-repeat-and-gap.md): Use `fr`, `repeat()`, and `gap` (~97.4% support) for flexible tracks instead of hard `%` limits that overflow.
- [Align grid tracks vs cell items with `*-content`, `*-items`, `*-self`, and `place-*`](align-grid-tracks-and-cells-with-content-items-and-place.md): Separate container track alignment (`*-content`) from cell alignment (`*-items`/`*-self`) and center with `place-content: center`.
- [Map page shells and responsive rearrangements with `grid-template-areas`](name-grid-regions-with-grid-template-areas.md): Name rectangular Grid regions with `grid-template-areas` so layout rearrangements happen on the parent rule.
- [Place and span grid items with line numbers, `1 / -1`, `span`, and `dense`](place-and-span-grid-items-with-lines-span-and-dense.md): Use `1 / -1` for future-proof full-span tracks, `span N` for featured cards, and `dense` only when order isn't critical.
- [Keep Grid DOM order logical and layer `reading-flow` when layouts reorder](keep-grid-dom-order-logical-and-use-reading-flow.md): Match DOM order to visual order first, adding `reading-flow` (~72.8% support) progressively instead of positive `tabindex`.
- [Build fluid card grids with `auto-fill`, `minmax()`, and `min()`](build-fluid-card-grids-with-auto-fill-minmax-and-min.md): Use `repeat(auto-fill, minmax(min(320px, 100%), 1fr))` for zero-overflow fluid grids, choosing `auto-fill` vs `auto-fit` intentionally.
- [Draw grid dividers via gap-exposed backgrounds or selective cell borders](draw-grid-dividers-with-background-gaps-and-inset-borders.md): Use container `background-color` + `gap` or selective borders cross-browser since CSS `rule` (~67.6%) is Chromium-only.
- [Prevent CSS Grid blowout with `minmax(0, 1fr)` or child `overflow: auto`](prevent-grid-blowout-with-minmax-zero-and-overflow.md): Stop wide children from expanding `1fr` tracks using `minmax(0, 1fr)`, `min-width: 0`, or `overflow: auto` on direct grid children.
- [Build full-bleed editorial layouts with a 3-column CSS Grid](build-full-bleed-article-grids-with-three-columns.md): Center prose in `1fr min(65ch, 100%) 1fr` and stretch `.full-bleed` breaks across `1 / -1` with negative `--breathing-room` margins.
- [Enable `position: sticky` and predict `z-index` / margins in CSS Grid](enable-sticky-children-and-z-index-in-css-grid.md): Add `align-self: start` on sticky grid items, skip `position: relative` for `z-index`, and virtualize large grids.
- [Share parent tracks with `subgrid` and reserve explicit subgrid spans](share-parent-tracks-with-css-subgrid-and-reserve-rows.md): Align nested components via `subgrid` (~94.7% support, `@supports` fallback) while explicitly reserving `span N` rows/columns.
- [Wrap `-webkit-line-clamp` text in a plain container inside CSS Grid layouts](wrap-line-clamped-text-inside-css-grid-items.md): Put `grid-area` on a wrapper `<div>` rather than directly on a `-webkit-line-clamp` element.

## Responsive & Behavioural CSS

- [Set the viewport meta tag without ever disabling user zoom](include-viewport-meta-tag-without-disabling-zoom.md): Include `width=device-width, initial-scale=1` on every page and never block pinch-zoom with `user-scalable=no`.
- [Test responsive UI on real budget mobile devices and visible scrollbars](test-responsive-ui-on-real-low-end-mobile-devices.md): Verify touch interactions, Safari/WebKit quirks, and performance on physical mid/low-end phones with remote DevTools.
- [Stick to one media-query direction and name ranges clearly](stick-to-one-media-query-direction-and-avoid-gap-overlaps.md): Remember `@media` adds zero specificity, avoid mixing `min-width`/`max-width`, and reset properties with `revert`.
- [Gate `:hover` and touch sizing with interaction and preference queries](gate-hover-and-tap-targets-with-interaction-media-queries.md): Use `@media (hover: hover) and (pointer: fine)` for hover states, `pointer: coarse` for 44px tap targets, and user-preference queries.
- [Scope CSS variables on `html`, supply fallbacks, and use numbered scales](scope-and-compose-css-variables-with-fallbacks-and-scales.md): Declare global tokens on `html` (not `*`), pass fallback defaults in `var()`, and use numbered shade/space scales.
- [Use `calc()` to mix runtime units and show your math](use-css-calc-to-mix-units-and-document-math.md): Combine percentages and lengths in `calc()`, keep spaces around `+`/`-`, and respect CSS unit types.
- [Use `dvh`/`svh` with `vh` fallbacks for mobile full-height layouts](use-dynamic-viewport-units-with-vh-fallbacks.md): Avoid mobile browser toolbar clipping on `100vh` by pairing `100vh` fallback with `100dvh` or `100svh`.
- [Constrain fluid lengths and spacing with `clamp()`, `min()`, and `max()`](constrain-responsive-values-with-clamp-min-and-max.md): Replace multi-breakpoint overrides with `min()`, `max()`, and `clamp(min, ideal, max)`.
- [Keep body text and form inputs at least `16px` (`1rem`) on mobile](use-safe-body-text-sizes-and-16px-form-inputs.md): Never shrink body copy below `1rem` (`16px`) and keep `<input>`/`<select>`/`<textarea>` `>= 1rem` to stop iOS zoom.
- [Build zoom-safe fluid typography with `clamp()`, `vw`, and `rem`](build-zoom-safe-fluid-typography-with-clamp-and-rem.md): Pair `vw` with a positive `rem` offset inside `clamp()` so fluid headings still scale at 200% browser zoom.
- [Use container queries with `container-type: inline-size` and named containers](use-container-queries-with-inline-size-and-named-containers.md): Measure component containers with `inline-size` (not `size`), optionally name them, and style children with `@container`.
- [Bundle interdependent fallbacks with `@supports` feature queries](bundle-progressive-enhancement-with-supports-feature-queries.md): Let single properties degrade silently; use `@supports` only when multiple declarations depend on a feature.
- [Use `revert` in media queries to undo inherited layout, flex, or divider rules](use-revert-in-media-queries-to-reset-layout-and-dividers.md): Reset overridden properties cleanly at breakpoints using `revert` instead of guessing default values.
- [Pair a fluid `clamp()` gap with local `overflow: auto` for resilient navigation bars](fluid-gap-and-scroll-fallback-for-nav-localization.md): Pair a `clamp()` fluid `gap` with local `overflow: auto` on nav bars so longer translations don't overflow the page.
