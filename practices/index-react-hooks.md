> Full index: [index.md](index.md)

# React Hooks, Effects & Performance

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

## `useId`, Rules of Hooks & Refs

- [Generate unique, SSR-safe accessible IDs with `React.useId()`](generate-unique-accessible-ids-with-useid.md): Use `useId()` (and suffix derivatives like `${id}-hint`) for `htmlFor`/`aria-*` IDs instead of static strings or render-time randoms; never use it for `.map()` `key`s.
- [Call React hooks unconditionally at the top level of components or custom hooks](call-react-hooks-unconditionally-at-the-top-level.md): Never call hooks inside conditionals, loops, callbacks, or after early `return`s; keep hooks above guards or extract conditional child components.
- [Use `useRef` for DOM access and mutable values that do not drive renders](use-refs-for-dom-access-and-non-render-mutable-values.md): Read DOM refs in handlers/`useEffect` (never during render), store non-UI mutable values in refs, and return cleanup functions from React 19+ callback refs without implicit returns.

## `useEffect`, Cleanup & Closures

- [Reserve `useEffect` for synchronizing with external systems, not events or derived data](reserve-useeffect-for-external-synchronization.md): Sync external APIs/DOM focus in `useEffect`, keep render transforms inline and `POST` actions in event handlers, and never pass `async` directly to `useEffect`.
- [Honor `exhaustive-deps` and return symmetric cleanup functions from `useEffect`](honor-exhaustive-deps-and-clean-up-effects.md): Declare all reactive dependencies per `react-hooks/exhaustive-deps`, guard with early `return`s, and clean up listeners, timers, observers, or stale fetches.
- [Keep renders pure and leave `<React.StrictMode>` enabled in development](keep-react-renders-pure-and-strictmode-enabled.md): Keep `<StrictMode>` on so dev double-renders and remounts expose accidental mutations and missing effect/ref cleanups early.
- [Avoid stale closures in effects and memoized callbacks with functional updaters](avoid-stale-closures-with-functional-updaters.md): Use `setState(prev => ...)` inside intervals, effects, or `[]`-dependency callbacks so snapshots never go stale without forced re-subscriptions.

## Custom Hooks & Data Fetching

- [Extract reusable state and effect logic into `use*` custom hooks](extract-reusable-effect-and-state-logic-into-custom-hooks.md): Encapsulate shared hooks with isolated per-call state, pass/return `ref` objects (never `ref.current`), and pick tuple vs object return shapes intentionally.
- [Model async `fetch` lifecycles with explicit status unions and `.ok` checks](handle-async-fetch-states-and-validation-explicitly.md): Use explicit status strings (`idle`/`loading`/`success`/`error`/`empty`), check `response.ok` in `try/catch`, encode params safely, and watch trailing-slash CORS redirects.
- [Trigger mutations in event handlers and prefer query libraries over raw mount `useEffect` fetches](prefer-data-fetching-libraries-over-raw-mount-effects.md): Keep mutations in event handlers, adopt `SWR`/TanStack Query/framework loaders for mount fetching with throwing `fetcher`s, or guard raw effects against race conditions.

## Render Optimization, Memoization & React Compiler

- [Restructure component composition before reaching for `React.memo`](restructure-components-before-reaching-for-memo.md): State changes cascade re-renders to all descendants; push state down or lift static subtrees into `children` before memoizing.
- [Apply `React.memo`, `useMemo`, and `useCallback` intentionally alongside React Compiler](stabilize-memoized-values-and-callbacks-intentionally.md): Reserve manual memoization for profiled slow subtrees/calculations or stable `memo`/`useEffect` identities, and enable React Compiler where supported.
