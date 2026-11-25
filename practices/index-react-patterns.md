> Full index: [index.md](index.md)

# React Component Design & Patterns

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

## Component APIs, Slots & Composition

- [Decouple reusable UI primitives from domain objects](decouple-reusable-primitives-from-domain-objects.md): Pass minimal scalar props to low-level UI primitives, extract reusable widgets from feature components, and avoid rigid Atomic Design folders.
- [Forward `ref`s and HTML prop types through custom wrapper components](forward-refs-to-underlying-dom-elements-in-wrapper-components.md): Accept `ref` as a prop in React 19+ (or `React.forwardRef` in React 18) and type wrappers with `React.ComponentProps` so primitives stay DOM-accessible.
- [Constrain polymorphic `as` tags and adapt heading levels to nesting depth](constrain-polymorphic-tags-and-dynamic-heading-levels.md): Validate polymorphic `as` tags against an allowlist, check `typeof href === "string"`, and compute heading levels (`<h1>`–`<h6>`) dynamically.
- [Export compound sub-components as named exports instead of dot properties](export-compound-subcomponents-as-named-exports-not-dot-properties.md): Pick data-driven props vs composable compound components intentionally, and use named exports rather than attaching `Parent.Child = ...` properties.
- [Use JSX slot props and component references instead of `React.cloneElement`](use-jsx-slots-and-component-props-instead-of-clone-element.md): Pass JSX elements for multi-region slots, pass component references (`icon: Icon`) when the child controls props, and avoid central `ICON_MAP` bundles.

## State Architecture, Context & Reducers

- [Keep a single source of truth: choose controlled or uncontrolled APIs without prop-syncing](choose-controlled-or-uncontrolled-apis-without-prop-syncing.md): Never copy props into `useState` and sync them with `useEffect`; make components either fully controlled (`value`/`onChange`) or uncontrolled (`defaultValue`).
- [Use `key`s and render-tree position to reset or preserve component state intentionally](use-keys-and-tree-position-to-reset-or-preserve-component-state.md): Change `key` to cleanly reset child state or retrigger CSS animations, keep type/position stable to preserve state, and never nest component definitions inside render.
- [Try composition before Context, then encapsulate Context inside a `*Provider` component](encapsulate-context-in-provider-components-after-composition.md): Pass direct props or `children`/slots first; when Context is warranted, own state and semantic action callbacks inside a dedicated `*Provider` component.
- [Memoize Context Provider `value` objects and split volatile state from actions](memoize-context-provider-values-to-prevent-consumer-rerenders.md): Wrap object context `value`s in `useMemo` and action callbacks in `useCallback` (with functional updaters) so unrelated provider renders do not re-render consumers.
- [Consolidate coordinated state transitions with pure `useReducer` functions](consolidate-complex-state-transitions-with-pure-usereducer.md): Use `useReducer` for multi-action or coupled state; dispatch semantic event actions, keep reducers strictly pure, and scope `switch` `case` blocks with `{}`.

## Immutable Updates, Portals & Error Boundaries

- [Simplify deeply nested immutable state updates with Immer `produce`](simplify-deeply-nested-immutable-updates-with-immer.md): Use explicit `produce(state, draft => ...)` (named export in Immer v10+) for nested state updates via Proxy structural sharing, and unwrap logs with `current()`.
- [Target portals safely and account for React-tree event and context bubbling](render-overlays-with-createportal-and-mind-react-tree-bubbling.md): Portal overlays into a dedicated root or `document.body` host (never `createRoot(document.body)`), and remember events and Context still follow the React tree.
- [Isolate UI feature failures with scoped React Error Boundaries](isolate-feature-failures-with-scoped-error-boundaries.md): Place `<ErrorBoundary>` components at independent feature boundaries (not just app root or every leaf) and test fallback recovery in production builds.
