> Full index: [index.md](index.md)

# Escape stacking contexts for modals via native `<dialog>` or portals

**When to use**: When building modals, drawers, tooltips, or popovers invoked from nested components.

**Rule**: Render overlays into the browser's top layer using `<dialog>` opened with `.showModal()` (which automatically handles Escape, `::backdrop`, and making the rest of the page `inert`—never add `tabindex` to `<dialog>` or use the `open` attribute for modals), or teleport them outside ancestor stacking contexts and `overflow` clippers with `createPortal` / `<Teleport>` alongside proper focus trapping and restoration.

**Example**:
```jsx
import { createPortal } from 'react-dom';

function Modal({ isOpen, children }) {
  if (!isOpen) return null;
  return createPortal(
    <div role="dialog" aria-modal="true">{children}</div>,
    document.body
  );
}
```

**Avoid**: Leaving modals nested inside cards with `overflow: hidden` or `transform`, or toggling `<dialog open>` when you actually want modal background blocking.

**Source**: [HTML dialog element — MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog), [createPortal — React Docs](https://react.dev/reference/react-dom/createPortal), [Teleport — Vue Docs](https://v3.vuejs.org/guide/teleport.html)
