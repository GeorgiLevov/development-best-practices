> Full index: [index.md](index.md)

# UI Engineering: Components, Interaction & Motion

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

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
- [Pass nested content through the `children` prop](pass-nested-content-through-the-children-prop.md): Accept primary content via `children` so components nest like HTML.
- [Pad leading-icon inputs inside a `<label>` wrapper and forward `id` on custom selects](pad-leading-icon-inputs-and-wrap-with-label.md): Wrap icon inputs in `<label>`, pad `padding-left` for the icon box, forward `id` on custom `<Select>`, and validate size props.
- [Prefer uncontrolled accessible dialogs for self-contained trigger/close drawers](use-uncontrolled-accessible-dialogs-for-self-contained-toggles.md): Let accessible dialog primitives own open state (`Trigger`/`Close`) when nothing external toggles them, and include `Title`/`Description`.
- [Group sibling JSX elements with React Fragments (`<>...</>`) instead of extra `<div>`s](group-top-level-elements-with-react-fragments.md): Return `<>...</>` React Fragments instead of wrapper `<div>`s so sibling nodes don't break CSS or HTML structure.
- [Use `<dl>`, `<dt>`, and `<dd>` for key-value metadata pairs](use-description-lists-for-key-value-metadata.md): Wrap structured label-value metadata in semantic `<dl>`/`<dt>`/`<dd>` lists instead of generic `<div>`/`<span>` pairs.
- [Keep submit buttons clickable and explain validation errors](keep-submit-buttons-clickable-and-explain-validation-errors.md): Avoid `disabled` submit buttons that hide why submission fails; let users click and show clear validation feedback.
- [Replace `window.alert()` and `window.confirm()` with non-blocking stateful UI](replace-blocking-browser-dialogs-with-stateful-ui.md): Use state-driven inline banners (`role="alert"`), toasts, or accessible `<dialog>` modals instead of thread-blocking native `alert`/`confirm` prompts.
- [Style unstyled primitives via `data-state` attributes and prefer Popovers over Tooltips for rich help](style-unstyled-primitives-with-data-state-and-pick-popover-over-tooltip.md): Target `[data-state="open"]` on headless primitives, portal floating content cleanly, and choose Popover over Tooltip/HoverCard for accessible explanations.

## Interaction, Focus & Scrolling

- [Remove mobile tap highlights and text selection only when you provide feedback](remove-tap-highlights-and-text-selection-sparingly.md): Disable tap highlight and `user-select` only on controls with their own press feedback.
- [Expand tap targets with an invisible pseudo-element hit area](expand-tap-targets-with-pseudo-element-hit-areas.md): Grow hit areas to 44px+ with a negative-inset `::after` without changing visuals.
- [Let clicks pass through overlay wrappers with `pointer-events`](let-clicks-pass-through-overlay-wrappers-with-pointer-events.md): Set `pointer-events: none` on invisible wrappers and `auto` on interactive children.
- [Enable smooth scrolling behind reduced-motion checks and never scroll-jack](enable-smooth-scrolling-behind-reduced-motion-and-never-scroll-jack.md): Gate smooth scrolling on motion preference, opt in per link in SPAs, never hijack scroll.
- [Build swipeable carousels with CSS scroll snap](build-swipeable-carousels-with-css-scroll-snap.md): Snap scroll containers with `scroll-snap-type` and `scroll-snap-align` instead of JS carousels.
- [Blend custom scrollbars subtly and only for fine pointers](blend-custom-scrollbars-subtly-for-fine-pointers.md): Theme scrollbars with `scrollbar-color` under `(pointer: fine)` so they blend in.
- [Offset anchor targets below sticky headers with `scroll-margin-top`](offset-anchored-headings-with-scroll-margin-top.md): Keep anchor targets clear of sticky headers with `scroll-margin-top`.
- [Prevent scrollbar and data-loading layout shifts (CLS)](prevent-scrollbar-and-loading-layout-shifts.md): Reserve `scrollbar-gutter`, size images up front, and group async content to cut CLS.
- [Rely on `:focus-visible` defaults and tint focus rings with `outline-color`](tint-native-focus-rings-with-outline-color.md): Keep browser `:focus-visible` rings and theme only `outline-color`; debug with `document.activeElement`.
- [Highlight containers with `:focus-within` or `:has(:focus-visible)`](highlight-containers-with-focus-within-or-has-focus-visible.md): Use `:focus-within` for coarse states and `:has(:focus-visible)` for keyboard-only parent rings.
- [Use `:has()` for parent, previous-sibling, and global state styling](use-has-for-parent-sibling-and-global-state-styling.md): Style parents, previous siblings, and document state with `:has()` instead of JS class syncing.
- [Pad scroll containers with matching negative margins so focus rings aren't clipped](pad-scroll-containers-with-negative-margins-to-save-focus-rings.md): Pad `overflow: auto` button strips and balance with negative margins so focus outlines and shadows aren't clipped.
- [Prevent global keyboard shortcuts from colliding with focused buttons and inputs](stop-event-propagation-around-global-shortcuts.md): Ignore editable elements in `window` `keydown` listeners and call `event.stopPropagation()` on conflicting keys (like `Space`) from focused buttons.
- [Manage focus trapping, scroll lock, and `Escape` dismissal in custom modals and drawers](manage-focus-scroll-and-escape-in-custom-dialogs.md): Pair ARIA dialog attributes with focus trapping/restoration, scroll locking, `aria-expanded` triggers, and `event.preventDefault()` on `Escape`.
- [Design accessible toast notifications as passive live regions without stealing focus](design-accessible-toast-notifications-without-stealing-focus.md): Render toasts inside an `aria-live` `<ol>` landmark, prefix variants with `VisuallyHidden`, mark close buttons `aria-live="off"`, and support `Escape` dismissal.

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
- [Enable perspective explicitly and tune its distance for 3D intensity](tune-perspective-distance-to-control-3d-intensity.md): Opt out of flat isometric 3D with `perspective` and tune its px distance for intensity.
- [Overfill sliding drawers with negative edge margins when easing overshoots](overfill-sliding-drawers-when-easing-overshoots.md): Add an `--overfill` width buffer and negative edge margin so bouncy drawer slide-ins never reveal a viewport seam.
- [Shift `transform-origin` toward off-center subjects in hover-zoom media](adjust-transform-origin-for-off-center-media-zooms.md): Shift `transform-origin` toward an off-center subject when scaling photos so hover zooms don't push the subject out of frame.
