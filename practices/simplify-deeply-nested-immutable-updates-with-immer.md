> Full index: [index-react-patterns.md](index-react-patterns.md)

# Simplify deeply nested immutable state updates with Immer `produce`

**When to use**: When updating deeply nested objects or arrays in `useState` or `useReducer` where manual spread-cloning is error-prone.

**Rule**: Use Immer's named `produce` export (`import { produce } from 'immer'` in Immer v10+, not default import) inside `useReducer` or `setState` updaters when immutable updates require multi-level object/array spreading. Immer wraps the draft in JS `Proxy` structural sharing (~3 KB gzip)—only modified branches are cloned while untouched subtrees keep reference equality and no-op changes return the original state. Prefer explicit `produce(state, (draft) => ...)` over implicit `useImmer` / `useImmerReducer` hooks when mixing teams so draft-only mutations are visually unmistakable. When debugging, wrap logs with `current(draft)` (proxies log as revoked), lift `produce` outside loops, and run expensive searches against `original(draft)`.

**Example**:
```jsx
import { produce } from 'immer';

function reducer(state, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'remove-invitee': {
        const invitees = draft.events[action.eventIndex].metadata.invitees;
        invitees.splice(action.inviteeIndex, 1);
        break;
      }
      // no default
    }
  });
}
```

**Avoid**: Using `import produce from 'immer'` on Immer v10+, logging `draft` directly without `current(draft)`, or calling `produce` inside a `for` loop on every item instead of wrapping the loop.

**Source**: [Immer — Joy of React](https://courses.joshwcomeau.com/joy-of-react/05-happy-practices/08-immer), [Immer 101 — Joy of React](https://courses.joshwcomeau.com/joy-of-react/05-happy-practices/08.01-immer-intro), [The useImmer Hook — Joy of React](https://courses.joshwcomeau.com/joy-of-react/05-happy-practices/08.03-use-immer), [Immer Performance — Immer Docs](https://immerjs.github.io/immer/performance/), [Immer v10.0.0 Release Notes](https://github.com/immerjs/immer/releases/tag/v10.0.0)
