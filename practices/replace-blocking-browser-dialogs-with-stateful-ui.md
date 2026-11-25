> Full index: [index-ui-engineering.md](index-ui-engineering.md)

# Replace `window.alert()` and `window.confirm()` with non-blocking stateful UI

**When to use**: When notifying users of errors, confirmations, validation results, or action outcomes in a web app.

**Rule**: Do not use `window.alert()`, `window.confirm()`, or `window.prompt()` for production UI feedback. Native browser dialogs freeze the JavaScript main thread, strip styling/branding, cannot carry structured actions or rich context, and jar keyboard and screen-reader users out of the page context. Instead, drive feedback from component state using inline status banners (`role="alert"` / `aria-live="polite"`), toast notifications, or an accessible `<dialog>` confirmation modal.

**Example**:
```jsx
{errorMessage && (
  <p role="alert" className={styles.banner}>
    {errorMessage}
  </p>
)}
```

**Avoid**: Calling `window.alert('Saved!')` or `window.confirm('Delete item?')` inside React event handlers in production apps.

**Source**: [Complex State Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/06.02-state-exercises)
