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

## Debugging & Tooling

- [Inspect inactive CSS hints in DevTools](inspect-inactive-css-hints-in-devtools.md): Use DevTools element inspection and inactive-CSS warnings (Chrome/Firefox) to catch unmet dependencies.
- [Debug CSS surprises from first principles](debug-css-surprises-from-first-principles.md): Consult MDN/specs and run minimal isolated tests when CSS surprises you instead of guessing.
- [Use CSS comments for sections and rule isolation](use-css-comments-for-sections-and-debugging.md): Use CSS /* */ comments to mark stylesheet sections and isolate rules while debugging.
- [Verify browser support before dropping fallbacks](verify-browser-support-before-dropping-fallbacks.md): Check current global support tables before shipping modern CSS without fallbacks or build transforms.
- [Embed live playgrounds in technical docs](embed-live-playgrounds-in-technical-docs.md): Embed live-editable playgrounds with Reset, Format, and isolated supporting tabs in technical docs.
- [Sandbox and self-host live code previews](sandbox-and-self-host-live-code-previews.md): Isolate editable code previews in cross-origin iframes and watch privacy-blocker issues on static templates.
- [Update immutable editor state via transactions](update-immutable-editor-state-via-transactions.md): Treat CodeMirror-style editor state as immutable and apply updates only via transactions.
