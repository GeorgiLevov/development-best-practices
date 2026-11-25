> Full index: [index-react-patterns.md](index-react-patterns.md)

# Isolate UI feature failures with scoped React Error Boundaries

**When to use**: When hardening independent widgets, drawers, charts, data-driven panels, or multi-section pages against unexpected runtime errors.

**Rule**: Draw fault lines around independent product features by asking *"if this subtree throws, should its siblings stay usable?"* Wrap each isolated boundary (sidebars, live tickers, drawers, editor panes, nested comment sections) in an `<ErrorBoundary fallback={...}>` built with `static getDerivedStateFromError()` + `componentDidCatch()` (class component, `react-error-boundary`, or `@sentry/react` `ErrorBoundary`, paired with React 19 `onCaughtError` / `onUncaughtError` root reporting hooks). Avoid both extremes: a single root-only boundary white-screens the entire app on minor widget errors, while wrapping every small input fragments atomic flows. Intentionally throw test errors during QA, and verify fallback UIs in production builds because development error overlays still display caught errors.

**Example**:
```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    reportError(error, errorInfo);
  }
  render() {
    return this.state.hasError ? this.props.fallback ?? null : this.props.children;
  }
}

// Feature-level isolation: ticker failure leaves <Stories /> intact
<ErrorBoundary fallback={<p>Market ticker unavailable.</p>}>
  <Ticker />
</ErrorBoundary>
```

**Avoid**: Relying on a single top-level `<ErrorBoundary>` for the whole app, wrapping every individual `<input>` in its own boundary, or assuming an Error Boundary is broken because Vite/webpack's dev error overlay still appears.

**Source**: [Error Boundaries — Joy of React](https://courses.joshwcomeau.com/joy-of-react/05-happy-practices/11-error-boundaries), [Fault Tolerance — Brandon Dail](https://www.brandondail.com/posts/fault-tolerance-react), [Catching Rendering Errors with an Error Boundary — React Docs](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary), [React Error Boundary — Sentry Docs](https://docs.sentry.io/platforms/javascript/guides/react/features/error-boundary/)
