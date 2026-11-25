> Full index: [index.md](index.md)

# Enable smooth scrolling behind reduced-motion checks and never scroll-jack

**When to use**: When in-page links, "back to top" buttons, or JS should scroll users to a location.

**Rule**: Gate `html { scroll-behavior: smooth; }` inside `@media (prefers-reduced-motion: no-preference)` and treat it as progressive enhancement; let the browser own duration/easing. In JS, pass `behavior: prefersReducedMotion ? 'auto' : 'smooth'` to `window.scrollTo()` / `element.scrollIntoView()` (`?.` guards missing targets). In SPAs, where page-wide smooth scrolling animates route-change scroll resets, opt in per link with a real `<a href>` that calls `scrollIntoView` and `preventDefault()`.

**Example**:
```js
function SmoothScrollTo({ id, children }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  function handleClick(event) {
    event.preventDefault();
    document.querySelector(`#${id}`)?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }
  return <a href={`#${id}`} onClick={handleClick}>{children}</a>;
}
```

**Avoid**: Scroll-jacking (overriding wheel/touch scroll physics), un-gated smooth scrolling, or replacing anchor links with `<div onClick>` handlers.

**Source**: [Scrolling — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/10-scrolling), [Smooth Behavior — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/10.01-smooth-scrolling), [Element.scrollIntoView() — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView), [Optional chaining (?.) — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
