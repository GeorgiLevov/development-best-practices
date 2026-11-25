> Full index: [index.md](index.md)

# Typography, Color, Media & Visual Effects

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

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
- [Verify WCAG contrast ratios and simulate color vision deficiencies](verify-contrast-ratios-and-simulate-color-vision-deficiencies.md): Check WCAG ratios, sample text-over-image pixels, and emulate vision deficiencies in DevTools.
- [Theme `::selection` highlights through CSS variables](theme-selection-highlights-with-css-variables.md): Use one global `::selection` rule fed by per-section CSS variables.
- [Tint native checkboxes, radios, ranges, and progress with `accent-color`](tint-native-form-controls-with-accent-color.md): Brand checkboxes, radios, ranges, and progress with `accent-color` instead of rebuilding them.
- [Align text optically and step outside spacing tokens when needed](align-text-optically-and-break-spacing-tokens-when-needed.md): Trim text boxes, nudge glyphs, and use bespoke offsets for perceived alignment.

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

## Images, Icons & Media

- [Prefer inline SVG icons over icon fonts and set `display: block`](prefer-inline-svg-icons-over-icon-fonts.md): Use inline SVG icons (not icon fonts), strip inline baseline gaps with `display: block`, and label icon-only buttons.
- [Use semantic `<img>` with contextual `alt` text for meaningful images](use-semantic-img-with-contextual-alt-over-background-image.md): Reserve `<img>` for meaningful visuals, write concise context-aware `alt` text, and null decorative images with exact `alt=""`.
- [Crop and anchor sized `<img>`/`<video>` with `object-fit` and `object-position`](fit-and-crop-replaced-media-with-object-fit-and-object-position.md): Pair fixed `width` and `height` on images/videos with `object-fit: cover` (or `contain`) and `object-position`.
- [Guard `<img>` intrinsic sizing inside Flexbox containers](guard-img-elements-inside-flex-containers.md): Wrap or set `min-width: 0` / `width: 0` on flex-item images so intrinsic pixel dimensions don't overflow or skew `flex` ratios.
- [Size proportional media, videos, and iframes with `aspect-ratio`](reserve-media-proportions-with-aspect-ratio.md): Use CSS `aspect-ratio` (~97.2% support) with `object-fit: cover` instead of `padding-bottom` wrapper hacks.
- [Serve high-DPI AVIF/WebP images with `srcset` and `<picture>`](serve-responsive-avif-webp-images-with-srcset-and-picture.md): Provide `1x`/`2x`/`3x` candidates via `srcset` and ordered AVIF/WebP fallbacks via `<picture>` (or `next/image`).
- [Reserve `background-image` for tiling patterns and crisp high-DPI surfaces](reserve-background-image-for-tiling-and-decorative-surfaces.md): Use `background-image` for repeating patterns or decorative textures, pairing `min-resolution` with explicit `1x` `background-size`.

## Visual Effects: Filters, Shadows, Gradients & Shapes

- [Use CSS color filters and animate `filter` for hover feedback](apply-color-filters-and-animate-filter-for-hover-feedback.md): Chain filter functions and transition `filter` for gradient-safe hover states.
- [Treat `filter: blur()` as cosmetic and test its rendering cost](treat-blur-filters-as-cosmetic-and-test-their-cost.md): Pair `blur()` concealment with `aria-hidden`, crop edges, and profile on low-end devices.
- [Build frosted-glass headers with `backdrop-filter` and legible fallbacks](build-frosted-glass-with-backdrop-filter-and-fallbacks.md): Blur content behind headers with a semi-opaque background and an opaque `@supports` fallback.
- [Understand percentage `border-radius` and the 8-value slash syntax](understand-border-radius-percentages-and-slash-syntax.md): Know percentages create elliptical corners and use the 8-value slash syntax for blobs.
- [Calculate nested border radii from the inner radius plus padding](calculate-nested-border-radius-from-padding.md): Set outer radius = inner radius + padding with `calc()` for concentric corners.
- [Make pill and stadium shapes with an oversized `border-radius`](make-pill-and-stadium-shapes-with-oversized-radius.md): Use `100vmax`-style radii that scale down proportionally to stay circular.
- [Choose `box-shadow`, `filter: drop-shadow()`, or `text-shadow` by need](choose-box-shadow-drop-shadow-or-text-shadow-by-need.md): Pick box-shadow for boxes, drop-shadow for contoured or grouped shapes, text-shadow for text.
- [Create single-sided and inset shadows with spread and `inset`](create-single-sided-and-inset-shadows-with-spread.md): Cancel blur bleed with negative spread and use `inset` for recessed wells.
- [Design cohesive, layered, color-matched shadow tokens](design-cohesive-layered-color-matched-shadows.md): Share one light source, layer shadows, tint them by hue, and expose elevation tokens.
- [Control linear gradients with angles, color stops, hints, and hard edges](control-gradient-color-stops-hints-and-hard-edges.md): Use angles, two-position stops for hard edges, and color hints for midpoints.
- [Use radial and conic gradients for glows, spotlights, and pie charts](use-radial-and-conic-gradients-for-glows-and-charts.md): Build spotlights, edge glows, and pie charts with `circle at` and `conic-gradient(from … at …)`.
- [Smooth image-overlay gradients with eased color stops](smooth-image-overlay-gradients-with-eased-stops.md): Generate many eased stops so text scrims over photos have no hard edge.
- [Avoid gray gradient dead zones with midpoint colors or `in oklch`](avoid-gray-dead-zones-with-midpoints-or-oklch-interpolation.md): Interpolate `in oklch` with a fallback or add saturated midpoint stops.
- [Cut shapes with `clip-path` and animate polygons with matching points](cut-shapes-with-clip-path-and-animate-matching-points.md): Clip with polygon/circle/ellipse, keep point counts equal, and promote layers to animate.
- [Apply drop shadows to a wrapper around `clip-path` elements](apply-drop-shadows-to-a-wrapper-of-clipped-elements.md): Put `drop-shadow()` on an unclipped parent because filters run before `clip-path`.
