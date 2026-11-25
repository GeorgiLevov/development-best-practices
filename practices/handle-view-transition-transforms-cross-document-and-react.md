> Full index: [index-animation.md](index-animation.md)

# Handle View Transition transforms, aspect-ratio shifts, cross-document routes, and React `<ViewTransition>`

**When to use**: When customizing View Transition keyframes, morphing elements with changing shapes, enabling MPA cross-document transitions, integrating View Transitions in React, or opting into route transitions in Astro.

**Rule**: Never animate `transform: translate()` directly on `::view-transition-group` because the browser positions groups with `transform: matrix(...)`—applying your own `transform` clobbers viewport alignment; animate `::view-transition-old`/`::view-transition-new` instead (or combine with `animation-composition: add`). For size changes, let `::view-transition-group` interpolate `width`/`height` rather than adding `transform: scale()`, and use plain CSS transitions for simple single-element width changes. Prevent warped aspect-ratio morphs by setting `width: fit-content` on fluid text boxes, splitting container background and inner text into separate `view-transition-name`s (`height: 100%` on views, `object-fit: none` + `overflow: clip`, or `view-transition-group: contain` with `::view-transition-group-children(...) { overflow: clip }` where supported). For same-origin MPA navigations, opt in on both pages with `@view-transition { navigation: auto; }` inside an inline `<style>` in `<head>` (avoiding external CSS/AdBlock races before first paint), pair `<link rel="expect" href="#..." blocking="render">` when needed, and assign dynamic names/types via `pageswap`/`pagereveal` (cleaning up for BFCache). In React SPAs (always same-document), either wrap `React.startTransition` inside `document.startViewTransition` or use React 19.3+ `<ViewTransition>` placed before its first DOM child, triggered by `startTransition`/`Suspense`/`useDeferredValue` with unique `name` props and without calling `document.startViewTransition` manually. In Astro, opt in by placing `<ViewTransitions />` in the document head (it ships fallbacks for browsers without the API). Mark shared chrome with `transition:persist` so a site header is not swapped on every navigation, and trust Astro’s built-in `prefers-reduced-motion` handling rather than adding a second motion gate.

**Example**:
```html
<head>
  <style>
    @view-transition { navigation: auto; }
    .site-header { view-transition-name: site-header; }
  </style>
</head>
```
```jsx
import { ViewTransition, startTransition } from 'react';
// Trigger with startTransition(() => setTab(next)); never mix with document.startViewTransition()
<ViewTransition name={`card-${item.id}`}>
  <article>{item.title}</article>
</ViewTransition>
```

**Avoid**: Overwriting `::view-transition-group`'s `transform`, putting `@view-transition` only in a deferred external stylesheet, mounting two React `<ViewTransition>` instances with the same `name`, or calling `document.startViewTransition` around `<ViewTransition>`.

**Source**: [Matrix Transforms — Whimsical Animations](https://courses.joshwcomeau.com/wham/03-advanced-interactions/07.02-vt-matrix-transforms), [Gotchas — Whimsical Animations](https://courses.joshwcomeau.com/wham/03-advanced-interactions/07.07-vt-gotchas), [Route Transitions — Whimsical Animations](https://courses.joshwcomeau.com/wham/03-advanced-interactions/07.08-vt-route-transitions), [View Transitions With React — Whimsical Animations](https://courses.joshwcomeau.com/wham/03-advanced-interactions/07.09-vt-react), [cross-document-view-transitions-example](https://github.com/joshwcomeau/cross-document-view-transitions-example), [Handling aspect ratio changes — Jake Archibald](https://jakearchibald.com/2024/view-transitions-handling-aspect-ratio-changes/), [Nested view transition groups — Chrome for Developers](https://developer.chrome.com/docs/css-ui/view-transitions/nested-view-transition-groups), [Cross-document view transitions — Chrome for Developers](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document), [`<ViewTransition>` — React Docs](https://react.dev/reference/react/ViewTransition), [View transitions — Beyond CSS](https://module-5.beyondcss.dev/lessons/view-transitions), [View transitions — Astro docs](https://docs.astro.build/en/guides/view-transitions/)
