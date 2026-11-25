> Full index: [index-ui-engineering.md](index-ui-engineering.md)

# Manage focus trapping, scroll lock, and `Escape` dismissal in custom modals and drawers

**When to use**: When implementing a custom modal dialog or mobile navigation drawer without a headless primitive or `<dialog>.showModal()`.

**Rule**: When building a custom dialog or modal drawer directly in React (for instance when native Top Layer `<dialog>` / `popover` would hide non-Top-Layer tooltips or password-manager extensions), enforce all four modal behaviors: (1) set `role="dialog"`, `aria-modal="true"`, and `aria-label`/`aria-labelledby` on the panel; (2) trap Tab focus inside while open and restore focus to the trigger element on close (e.g., `react-focus-lock` with `returnFocus={true}`); (3) lock background page scrolling (`react-remove-scroll`) and wire a backdrop click + labeled close button; and (4) close on `Escape` while calling `event.preventDefault()` so Safari does not exit fullscreen. Expose `aria-expanded={isOpen}` and an accessible label on hamburger/drawer toggle buttons.

**Example**:
```jsx
function Modal({ title, onDismiss, children }) {
  useEscapeKey((event) => {
    event.preventDefault();
    onDismiss();
  });

  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div role="dialog" aria-modal="true" aria-label={title}>
          <button type="button" onClick={onDismiss} aria-label="Close modal">×</button>
          {children}
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}
```

**Avoid**: Shipping a `position: fixed` modal `<div>` without trapping Tab focus, forgetting `returnFocus` on close, omitting `aria-expanded` on hamburger triggers, or handling `Escape` without `event.preventDefault()`.

**Source**: [Modals — Joy of React](https://courses.joshwcomeau.com/joy-of-react/04-component-design/09-modals), [Modal Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/04-component-design/09.01-modal-exercises), [Dialog (Modal) Pattern — WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/), [Menu Button Pattern — WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)
