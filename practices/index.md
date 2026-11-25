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
