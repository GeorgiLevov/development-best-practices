> Full index: [index-react-patterns.md](index-react-patterns.md)

# Target portals safely and account for React-tree event and context bubbling

**When to use**: When rendering modals, drawers, toast shelves, or floating menus with `createPortal`.

**Rule**: Mount the main React root in a dedicated `<div id="root">` (never `createRoot(document.body)`, which conflicts with third-party scripts and browser extensions), and teleport overlays with `createPortal(jsx, target)` into either a sibling container (`#modal-root` / `#toast-root`) or a wrapper `<div data-portal-host>` inside `document.body`. Remember that `createPortal` only relocates the physical DOM nodes—Context providers and React synthetic events (`onClick`, `onKeyDown`) still propagate up the **React component hierarchy**, not the DOM hierarchy. Call `event.stopPropagation()` or lift the portal in JSX whenever ancestor React handlers should ignore clicks inside the portal.

**Example**:
```jsx
import { createPortal } from 'react-dom';

function Portal({ children }) {
  return createPortal(
    <div data-react-portal-host>{children}</div>,
    document.body
  );
}

// Note: clicks inside <Portal> still bubble to <div onClick={...}> in JSX!
<div onClick={handleCardClick}>
  <Portal><Modal onClose={close} /></Portal>
</div>
```

**Avoid**: Mounting the main app via `createRoot(document.body)`, dynamically creating/destroying host nodes in `useEffect` unless integrating with a non-React widget, or assuming DOM separation stops React `onClick` bubbling.

**Source**: [Portals — Joy of React](https://courses.joshwcomeau.com/joy-of-react/05-happy-practices/09-portals), [Portals Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/05-happy-practices/09.01-portals-exercises), [createPortal — React Docs](https://react.dev/reference/react-dom/createPortal#createportal)
