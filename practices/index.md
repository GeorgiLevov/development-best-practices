# Development Best Practices

> Curated development practices Georgi trusts. Agents should read this index first, then open only the files that match the task.

## Core

- [HTML & Semantics](html-semantics.md): Use semantic tags, correct heading hierarchy, accessible landmarks.
- [CSS & Layout](css-layout.md): Prefer modern layout (Flexbox, Grid), avoid magic numbers, keep specificity low.
- [Accessibility](a11y.md): Keyboard, focus, ARIA only when needed, contrast, reduced motion.
- [Performance](performance.md): Image formats, lazy loading, avoid layout shift, critical CSS.

## Components & Patterns

- [React Patterns](react-patterns.md): Composition over inheritance, controlled vs uncontrolled, key usage.
- [State](state.md): Where state lives, when to lift, when to use context vs props.
- [Forms](forms.md): Validation timing, error messages, progressive enhancement.

## Optional

- [Testing](testing.md): What to unit test vs what to leave to integration.
- [Naming](naming.md): File, component, and class naming conventions.

## Developer Mindset & Learning

- [Learn principles over memorizing recipes](learn-principles-over-memorizing-recipes.md): Learn CSS layout algorithms and mental models rather than memorizing isolated snippets.
- [Adopt a growth mindset for debugging and learning](adopt-growth-mindset-for-debugging.md): Treat tough bugs and unfamiliar tools as trainable skills rather than fixed personal limits.
- [Notice fixed-mindset triggers as cues](notice-fixed-mindset-triggers.md): Spot defensiveness, avoidance, or shortcut-seeking as cues to shift back into learning mode.
- [Praise process and strategy, not innate talent](praise-process-and-strategy-not-innate-talent.md): Credit specific strategies, rigor, and error recovery in reviews instead of innate smarts.
- [Learn by active struggle and experimentation](learn-by-active-struggle-and-experimentation.md): Experiment in live code and attempt problems before reading solutions to build recall.
- [Paraphrase notes to retain concepts](paraphrase-notes-to-retain-concepts.md): Rewrite newly learned concepts in your own words as concise bookmarks.
- [Learn in public for retention and accountability](learn-in-public-for-accountability.md): Share small demos, notes, and progress publicly to reinforce learning and accountability.

- [Prefer simple, readable code over clever CSS or JS tricks](prefer-simple-readable-code-over-clever-tricks.md): Write straightforward, maintainable CSS and isolate unavoidable complexity instead of shipping clever one-liners.

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

## Typography & Color

- [Prefer `hsl()` or `oklch()` over hex codes](prefer-hsl-or-oklch-over-hex-colors.md): Write colors in hsl() or oklch() rather than hex codes for intuitive readability and tuning.
- [Use `oklch()` with sRGB fallbacks for uniform color](use-oklch-with-srgb-fallbacks-for-uniform-color.md): Use oklch() with a preceding hsl()/rgb() fallback for perceptual lightness and wide-gamut color.
- [Use space-separated color syntax with `/` alpha](use-space-separated-color-syntax-with-slash-alpha.md): Use modern space-separated rgb()/hsl() syntax with `/` for alpha instead of rgba()/hsla().
- [Compose dynamic color tokens with CSS variables](compose-dynamic-color-tokens-with-css-variables.md): Store HSL/OKLCH channel fragments in CSS variables and derive variants with calc() for dynamic themes.
- [Avoid CSS named colors in production](avoid-css-named-colors-in-production.md): Use CSS named colors only for quick prototypes because the 140-color palette is limited and inconsistent.
- [Always define a font fallback stack](always-define-a-font-fallback-stack.md): Declare a comma-separated font-family fallback stack ending in a generic keyword.
- [Load explicit weights and italics for web fonts](load-explicit-weights-and-italics-for-web-fonts.md): Load the specific weight and italic font files you use so browsers do not synthesize faux styles.
- [Reserve underlines for links](reserve-underlines-for-links.md): Avoid underlining non-link text, and keep inline prose links visibly underlined.
- [Separate semantic HTML emphasis from UI styling](separate-semantic-html-emphasis-from-ui-styling.md): Use <strong> and <em> for semantic meaning in text copy, and CSS for cosmetic UI styling.
- [Use CSS `text-transform` instead of all-caps HTML](use-css-text-transform-instead-of-all-caps-html.md): Keep original casing in HTML and apply text-transform: uppercase in CSS.
- [Use a unitless `line-height` of at least `1.5` for body text](use-unitless-line-height-minimum-1-5.md): Set body line-height as a unitless multiplier >= 1.5 so spacing scales with font-size.
- [Reserve `text-align` for text, not layout](reserve-text-align-for-text-not-layout.md): Use text-align only for text alignment (mindful of RTL), not for positioning blocks or images.
- [Set typographic constraints before picking a font](set-type-constraints-before-picking-fonts.md): Define readability, weight, script, and tabular constraints before choosing a typeface.

- [Respect OS subpixel font smoothing for dark-on-light body text](respect-os-font-smoothing-and-kerning-defaults.md): Keep `font-kerning` active and reserve `-webkit-font-smoothing: antialiased` for light text on dark macOS surfaces.
- [Balance headings with `text-wrap: balance` and wrap long words safely](prevent-text-overflow-with-wrap-balance-and-hyphens.md): Use `text-wrap: balance` on headings, pair `overflow-wrap: break-word` with `hyphens: auto` + `lang`, and use `&nbsp;` for pairs.
- [Use CSS `columns`, `float`, and ragged alignment selectively for editorial text](use-css-columns-and-floats-selectively-for-print-layouts.md): Use `columns` + `break-inside: avoid` and `float` for editorial wrap; prefer ragged-right prose over `justify`.
- [Avoid CSS-column or `order` masonry tricks for dynamic feeds](avoid-css-column-masonry-tricks-in-dynamic-lists.md): Do not use CSS `columns` or `nth-child`/`order` Flexbox hacks for infinite-scroll or interactive masonry grids.
- [Use system font stacks when zero latency and native feel come first](use-system-font-stacks-for-zero-latency-ui.md): Define an OS system font stack in a CSS custom property for instant, zero-download UI rendering.
- [Self-host subsetted `.woff2` web fonts instead of hotlinking font CDNs](self-host-subsetted-woff2-web-fonts.md): Serve subsetted `.woff2` files from your own origin (via Fontsource, `next/font`, or Glyphhanger) for speed and GDPR privacy.
- [Control FOIT/FOUT with `font-display` and fallback metric overrides](control-font-loading-with-font-display-and-metric-overrides.md): Prefer `font-display: fallback` or `optional`, test with throttled network + disabled local fonts, and match metrics.
- [Prefer variable fonts when using three or more weights or styles](prefer-variable-fonts-for-multiple-weights-and-styles.md): Replace multiple static font requests with one variable `.woff2` file and use standard CSS properties for built-in axes.

## Units & Accessibility

- [Choose `rem` vs `px` by user font-scaling intent](choose-rem-vs-px-by-user-font-scaling.md): Choose rem when a value should scale with user root font-size settings, and px when it should stay fixed.
- [Use `rem` for typography and reading margins](use-rem-for-typography-and-reading-margins.md): Use rem for font sizes and rem/em for vertical text margins so font scaling works.
- [Use `px` for borders and horizontal padding](use-px-for-borders-and-horizontal-padding.md): Keep border widths and horizontal container padding in px so enlarged text keeps readable line widths.
- [Use `rem` for media query breakpoints](use-rem-for-media-query-breakpoints.md): Write media query width breakpoints in rem so users with larger default text get roomier layouts.
- [Avoid `em` for `font-size` to prevent compounding](avoid-em-for-font-size-to-prevent-compounding.md): Avoid em on font-size because nested elements compound ratios; use rem instead.
- [Never set `html` `font-size` in `px` or `62.5%`](never-override-root-html-font-size-with-px-or-62-5-percent.md): Never set html font-size in px or use the 62.5% trick, which breaks preferences or third-party rem UI.
- [Map `px` to `rem` with CSS variables or `calc()`](map-px-to-rem-with-css-variables-or-calc.md): Translate pixel design specs to rem using CSS custom property scales or calc(Xrem / 16).
- [Prefer `min-height` and `max-width: 100%` over fixed sizes](prefer-min-height-and-max-width-over-fixed-dimensions.md): Use min-height and max-width: 100% instead of rigid heights/widths so scaled text wraps safely.
- [Never remove focus outlines without a replacement](never-remove-focus-outlines-without-replacement.md): Never set outline: none on focusable elements unless replacing it with a clearer focus indicator.
- [Test keyboard Tab navigation across browsers](test-keyboard-tab-navigation-across-browsers.md): Test Tab focus across browsers, accounting for macOS keyboard settings and Safari focus quirks.
- [Accessible `<button>` defaults, names, and target sizes](accessible-button-defaults-and-targets.md): Set type="button" on non-submit buttons, name icon buttons, size >= 44x44px, and check contrast.
- [Support WCAG 1.4.12 text-spacing overrides](support-wcag-text-spacing-overrides.md): Verify layouts do not clip or overlap when users override line, paragraph, letter, and word spacing.
- [Write descriptive link text and separate `<a href>` from `<button>`](write-descriptive-links-and-separate-links-from-buttons.md): Use `<a href>` only for navigation with standalone link copy, and `<button>` for in-page actions.
- [Choose `VisuallyHidden`, `display: none`, or `inert` by intent](choose-visually-hidden-vs-display-none-vs-inert.md): Use `VisuallyHidden` spans for screen-reader text (better translated than `aria-label`) and `inert` to block background overlays.
- [Escape stacking contexts for modals via native `<dialog>` or portals](use-portals-or-native-dialog-for-modals-and-overlays.md): Mount modals via `<dialog>.showModal()` or framework portals outside clipping and transformed ancestors.
- [Never rely on color alone to communicate status or meaning](never-rely-on-color-alone-to-convey-meaning.md): Always pair color cues with text labels, icons, or patterns for color-vision accessibility.
- [Truncate overflowing text intentionally with `ellipsis` or `line-clamp`](truncate-overflowing-text-intentionally.md): Use `ellipsis` (with `min-width: 0` in flex/grid) or `-webkit-line-clamp` only on non-critical preview text.

- [Pair form controls with visible `<label>` elements, not placeholders](pair-form-inputs-with-visible-labels-not-placeholders.md): Always associate a persistent `<label>` with every form field; keep `placeholder` strictly as an optional hint.
- [Keep a single `<h1>` per page for the main title, never on site logos](keep-only-one-h1-per-page-not-on-site-logos.md): Reserve `<h1>` for the page's unique main heading and use `<a>`/`<span>` for the recurring header logo.

## Debugging & Tooling

- [Inspect inactive CSS hints in DevTools](inspect-inactive-css-hints-in-devtools.md): Use DevTools element inspection and inactive-CSS warnings (Chrome/Firefox) to catch unmet dependencies.
- [Debug CSS surprises from first principles](debug-css-surprises-from-first-principles.md): Consult MDN/specs and run minimal isolated tests when CSS surprises you instead of guessing.
- [Use CSS comments for sections and rule isolation](use-css-comments-for-sections-and-debugging.md): Use CSS /* */ comments to mark stylesheet sections and isolate rules while debugging.
- [Verify browser support before dropping fallbacks](verify-browser-support-before-dropping-fallbacks.md): Check current global support tables before shipping modern CSS without fallbacks or build transforms.
- [Embed live playgrounds in technical docs](embed-live-playgrounds-in-technical-docs.md): Embed live-editable playgrounds with Reset, Format, and isolated supporting tabs in technical docs.
- [Sandbox and self-host live code previews](sandbox-and-self-host-live-code-previews.md): Isolate editable code previews in cross-origin iframes and watch privacy-blocker issues on static templates.
- [Update immutable editor state via transactions](update-immutable-editor-state-via-transactions.md): Treat CodeMirror-style editor state as immutable and apply updates only via transactions.
- [Prevent `100vw` horizontal overflow and debug overflowing boxes directly](prevent-and-debug-horizontal-overflow.md): Prefer `100%` over `100vw` and measure wide elements directly instead of masking overflow with `overflow-x: hidden` on `body`.
- [Configure compiler plugins for readable class names, SSR IDs, and prefixes](configure-compiler-plugins-for-dev-names-and-ssr.md): Enable SWC/Babel `displayName` and `ssr` plugins and check vendor-prefix settings for properties like `backdrop-filter`.
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

## Component Architecture & UI Patterns

- [Keep external margins off reusable UI components](keep-margins-off-reusable-components.md): Let parent layouts own inter-component spacing via `gap` or `Stack` primitives instead of baking outer margins into children.
- [Prefer component-scoped styling over global stylesheets](prefer-component-scoped-css-over-global-stylesheets.md): Choose CSS Modules, Tailwind, scoped SFC styles, or CSS-in-JS over unscoped global sheets to prevent collisions and dead CSS.
- [Weigh runtime CSS-in-JS against zero-runtime and RSC constraints](weigh-runtime-css-in-js-vs-zero-runtime-and-rsc.md): Benchmark real SSR performance, check maintenance status, and use CSS variables instead of Context themes in RSC.
- [Pass dynamic per-instance values via CSS custom properties](prefer-css-variables-for-dynamic-component-styles.md): Inject runtime values via `style={{ '--var': ... }}` and use `$`-props or `data-*` attributes instead of inline rules.
- [Constrain component styles to shared design tokens and scales](constrain-styles-with-design-tokens-and-scales.md): Pick sizes, spacing, and colors from shared design-token scales instead of arbitrary pixel values.
- [Preserve semantic HTML using polymorphic `as` or `asChild` props](preserve-semantic-html-with-polymorphic-components.md): Keep semantic tags (`<button>`, `<a>`, `<cite>`) across styled components via `as`/`asChild` or `href` switching.
- [Design component APIs with core props, composition, and escape hatches](design-component-apis-with-core-props-composition-and-escape-hatches.md): Use a few core props, wrapper composition for one-offs, and `className`/`...delegated` forwarding as escape hatches.
- [Keep a single source of styles with child-owned contextual rules](keep-a-single-source-of-styles-with-child-owned-context-rules.md): Co-locate common parent-context overrides inside the child component instead of reaching in from parents.
- [Wrap unstyled accessible primitives for complex interactive widgets](prefer-unstyled-accessible-primitives-for-complex-widgets.md): Use headless primitives (Radix, React Aria, Headless UI, Ariakit) for menus, comboboxes, dialogs, and tabs.
- [Build accessible breadcrumbs with `<nav>`, `<ol>`, `aria-current`, and CSS separators](build-accessible-breadcrumbs-with-nav-ol-and-aria-current.md): Mark breadcrumbs with `<nav aria-label="Breadcrumb">`, `<ol>`, `aria-current="page"`, and decorative CSS slashes.
- [Build custom progress bars with `progressbar` ARIA roles and corner clipping](accessible-custom-progress-bars-and-overflow-clipping.md): Set `role="progressbar"` plus value/label ARIA attributes when `<progress>` cannot be styled, and clip fills with a rounded wrapper.
- [Style `<select>` and file inputs by overlaying or restyling native controls](style-select-and-file-inputs-by-overlaying-or-restyling-native-controls.md): Keep native `<select>` UX via an `opacity: 0` overlay + sibling combinators or `appearance: none` + `pointer-events: none` icons.
- [Account for `overflow` axis coercion and positioned containing blocks](understand-overflow-axis-coercion-and-positioned-clipping.md): Use `overflow-x: clip` (since `hidden` forces `overflow-y: auto`) and match containing blocks when clipping `absolute` items.
- [Distinguish `visibility: hidden`, `opacity: 0`, and `display: none`](understand-visibility-hidden-vs-opacity-zero-vs-display-none.md): Never rely on `opacity: 0` alone to hide interactive UI; pair with `visibility: hidden` or `inert`.

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

## Images, Icons & Media

- [Prefer inline SVG icons over icon fonts and set `display: block`](prefer-inline-svg-icons-over-icon-fonts.md): Use inline SVG icons (not icon fonts), strip inline baseline gaps with `display: block`, and label icon-only buttons.
- [Use semantic `<img>` with contextual `alt` text for meaningful images](use-semantic-img-with-contextual-alt-over-background-image.md): Reserve `<img>` for meaningful visuals, write concise context-aware `alt` text, and null decorative images with exact `alt=""`.
- [Crop and anchor sized `<img>`/`<video>` with `object-fit` and `object-position`](fit-and-crop-replaced-media-with-object-fit-and-object-position.md): Pair fixed `width` and `height` on images/videos with `object-fit: cover` (or `contain`) and `object-position`.
- [Guard `<img>` intrinsic sizing inside Flexbox containers](guard-img-elements-inside-flex-containers.md): Wrap or set `min-width: 0` / `width: 0` on flex-item images so intrinsic pixel dimensions don't overflow or skew `flex` ratios.
- [Size proportional media, videos, and iframes with `aspect-ratio`](reserve-media-proportions-with-aspect-ratio.md): Use CSS `aspect-ratio` (~97.2% support) with `object-fit: cover` instead of `padding-bottom` wrapper hacks.
- [Serve high-DPI AVIF/WebP images with `srcset` and `<picture>`](serve-responsive-avif-webp-images-with-srcset-and-picture.md): Provide `1x`/`2x`/`3x` candidates via `srcset` and ordered AVIF/WebP fallbacks via `<picture>` (or `next/image`).
- [Reserve `background-image` for tiling patterns and crisp high-DPI surfaces](reserve-background-image-for-tiling-and-decorative-surfaces.md): Use `background-image` for repeating patterns or decorative textures, pairing `min-resolution` with explicit `1x` `background-size`.

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

## Animations & Motion

- [Master CSS `transform` order, percentages, `transform-origin`, and inline limits](understand-css-transforms-order-origin-and-inline-gotcha.md): Remember right-to-left transform chaining, self-relative `translate(%)`, `transform-origin`, and `inline-block` for `<span>`.
- [Transition explicit properties with purposeful easing and `200ms–500ms` durations](animate-specific-properties-with-natural-easing-curves.md): Avoid `transition: all`, choose `ease-out`/`ease-in`/`ease-in-out` intentionally, and target `200ms–500ms`.
- [Prevent hover "doom flicker" by separating trigger and animated target](prevent-hover-doom-flicker-by-separating-trigger-and-target.md): Attach `:hover`/`:focus` to a stationary wrapper element and apply `transform` transitions to a child.
- [Use `@keyframes` for mount, looped, multi-step, and pausable animations](use-keyframes-for-loops-multi-step-and-pausable-motion.md): Use `animation-direction: alternate`, keep `delay` out of the shorthand, and scope keyframes with `styled-components` or unique names.
- [Persist pre-delay and post-end keyframe states with `animation-fill-mode`](persist-keyframe-states-with-animation-fill-mode.md): Apply `animation-fill-mode: both` (or `forwards`/`backwards`) so delayed or finite keyframes never flash or snap back.
- [Tailor action-driven transitions and stagger orchestrated sequences](compose-action-driven-and-orchestrated-animations.md): Vary enter/exit and hover/active/cancel motion by user action, and isolate staggered timelines in helpers.
- [Animate composited properties and apply `will-change` intentionally](animate-composited-properties-and-use-will-change-sparingly.md): Prefer `transform`, `opacity`, and `filter` for 60fps frames, use `will-change` selectively, and test on budget mobile hardware.
- [Opt into motion with `prefers-reduced-motion: no-preference`](opt-in-to-motion-with-prefers-reduced-motion.md): Gate spatial motion inside `no-preference` media/JS checks instead of wildcard `0.01ms` hacks, and test with Reduce Motion on.
- [Share `perspective`, chain `preserve-3d`, and isolate flattening properties](configure-3d-perspective-preserve-3d-and-avoid-flattening.md): Forward `preserve-3d` through every intermediate wrapper and keep `overflow`/`opacity`/`filter` on an outer shell.
- [Default to CSS/WAAPI and reserve JS animation libraries for springs or FLIP](choose-css-waapi-or-js-animation-libraries-by-need.md): Prefer zero-bundle off-main-thread CSS/WAAPI, reach for Motion/React Spring/GSAP only when needed, and `aria-hidden` duplicate text.
