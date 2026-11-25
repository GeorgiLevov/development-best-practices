> Full index: [index.md](index.md)

# React Fundamentals, State & Forms

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

## JSX, Components & Structure

- [Mount React apps with `createRoot` and a single `<App />` shell](mount-react-apps-with-createroot-and-single-app-root.md): Bootstrap with `createRoot(container).render(<App />)`, keep entry modules minimal, and remember elements are descriptions until rendered.
- [Follow JSX expression, attribute casing, and whitespace rules](follow-jsx-expression-and-attribute-rules.md): Use expressions (never statements) in `{...}`, camelCase DOM props (`className`, `htmlFor`), self-close void tags, and insert `{' '}` for inline spaces.
- [Name components in `PascalCase` and destructure prop defaults](name-components-in-pascalcase-and-destructure-prop-defaults.md): Use `PascalCase` component names, destructured JS parameter defaults instead of `||`, and remember tag body `children` overrides prop attributes.
- [Assign stable `key`s on outermost mapped elements, never render-time randoms](assign-stable-keys-on-outermost-mapped-elements.md): Put sibling-unique `key`s on top-level `.map()` elements, generate IDs at creation (`crypto.randomUUID()`), and avoid `index` keys on mutable lists.
- [Guard JSX `&&` conditionals with booleans to avoid leaking `0` or `NaN`](guard-jsx-and-conditionals-against-leaked-numbers.md): Keep the LHS of JSX `&&` strictly boolean so `0`/`NaN` never render, and use ternaries or early `if` returns for alternate branches.
- [Prefer conditional rendering over CSS `display: none` by default](prefer-conditional-rendering-over-css-hiding-by-default.md): Omit inactive JSX subtrees by default, reserving `display: none` only for preserved DOM state or measured toggle bottlenecks.
- [Use a simple `range` helper with `.map()` for numeric JSX repetition](use-a-simple-range-helper-for-numeric-jsx-loops.md): Replace imperative `for` loops or fragile `Array.from` tricks with a clear `range(start, end, step)` helper inside JSX `.map()`.
- [Compose conditional `className` strings safely without passing `false`](compose-conditional-react-classes-without-false.md): Avoid `cond && styles.cls` in `className` (use `? cls : undefined` or `clsx(...)` for combining conditional and forwarded classes).
- [Colocate component files by role and avoid double-default barrel exports in Next.js](colocate-component-files-and-avoid-nextjs-double-default-barrels.md): Organize `src/` by role (`components/`, `hooks/`, `helpers/`, `utils.ts`), colocate component folders with `index.ts` forwarders, and omit `export *` alongside `export { default }` in Next.js App Router.

## State, Events & Forms

- [Bind React events with camelCased props and function references](bind-react-events-with-camelcased-props-and-function-references.md): Use React `onX` props instead of `querySelector` + `addEventListener`, pass function references (not calls), and pass explicit arguments consistently when handlers take parameters.
- [Follow `[x, setX]` naming and lazy-initialize expensive `useState` values](initialize-usestate-cleanly-and-lazy-init-expensive-values.md): Name state pairs `[thing, setThing]` and pass `useState(() => ...)` when initial computation does real work like `localStorage` reads.
- [Treat `useState` setters as scheduled updates for the next render snapshot](treat-react-state-setters-as-scheduled-next-render-snapshots.md): Compute `const next = ...` into a local variable when you need the updated value immediately in the same handler.
- [Distinguish React re-rendering (reconciliation) from browser re-painting](distinguish-react-re-rendering-from-browser-re-painting.md): Re-rendering diffs element snapshots; unchanged snapshots commit zero DOM mutations and trigger zero browser re-paints.
- [Never mutate objects or arrays in React state; replace with fresh copies](never-mutate-objects-or-arrays-in-react-state.md): Clone state arrays/objects before editing (`[...arr]`, `{ ...obj }`, `.map()`, `.filter()`, or Immer) instead of mutating in place.
- [Lift shared state to the lowest common ancestor and pass via props](lift-shared-state-to-the-lowest-common-ancestor.md): Keep props as read-only inputs flowing down and lift shared `useState` to the nearest common parent of components that need it.
- [Pass domain action callbacks to children instead of raw `setState` setters](pass-domain-action-callbacks-instead-of-raw-setstate.md): Expose semantic callbacks (`onAddItem`, `onToggleTodo`) rather than `setItems` so state shapes, IDs, and validation stay encapsulated in the owner.
- [Derive computed values during render instead of duplicating state](derive-computed-values-during-render-instead-of-duplicating-state.md): Store minimal raw truth in `useState`, compute derived views/slices inline during render, and keep dynamic round data in state/props rather than module constants.
- [Handle form submission via `<form onSubmit>` with `preventDefault()`](handle-form-submission-with-form-onsubmit-and-preventdefault.md): Use `<form onSubmit>` with `event.preventDefault()` instead of button `onClick` + `Enter` key handlers so native submit and validation work.
- [Keep controlled React inputs defined and match `value` vs `checked`](keep-controlled-react-inputs-defined-and-match-value-or-checked.md): Never initialize controlled state to `undefined`; bind `value` vs `checked`, coerce numeric inputs with `Number()`, and avoid shadowing in `.map()`.
- [Build `<select>` menus from `Object.entries()` with an explicit empty placeholder](model-select-options-with-entries-and-placeholder.md): Map `{ value: label }` dictionaries with `Object.entries()`, include `<option value="">` when state starts at `''`, and reserve `defaultValue` for uncontrolled inputs.
- [Pair `minLength` with `pattern` on controlled React inputs that transform text](pair-minlength-with-pattern-on-transformed-react-inputs.md): Enforce `pattern` (plus `title`) alongside `minLength` whenever `onChange` reformats `value` (e.g., `.toUpperCase()`), because programmatic values reset browser dirty flags.
- [Choose state architecture by app shape instead of defaulting to Redux](choose-state-management-by-app-shape.md): Pick React state + Context for mostly-static sites, server-cache tools (SWR/TanStack Query) for CRUD apps, and Redux for client-heavy editors.
