> Full index: [index.md](index.md)

# React Concurrent Rendering, Actions & Suspense Composition

> Sub-index of the Development Best Practices collection. Open only the files that match the task. For Next.js App Router, streaming `loading.js`, and RSC defaults, see also [index-react-fullstack.md](index-react-fullstack.md).

## Transitions, Deferred Values & Actions

- [Defer expensive updates with `useDeferredValue`](defer-expensive-updates-with-usedeferredvalue.md): Keep a search input urgent and let a memoized heavy list catch up when React is idle, instead of a fixed debounce timer.
- [Mark non-urgent updates as transitions with `useTransition`](mark-nonurgent-updates-as-transitions-with-usetransition.md): Wrap expensive setters in `startTransition`, keep urgent input outside, and read a shared `isPending` until every in-flight transition settles.
- [Run async mutations as React Actions](run-async-mutations-as-react-actions.md): Pass async work to `startTransition` or `<form action>`, nest a second transition after `await`, and let React batch pending states.
- [Show optimistic UI during transitions with `useOptimistic`](show-optimistic-ui-during-transitions-with-useoptimistic.md): Call `addOptimistic` inside an Action to render temporary state that React replaces when the real update commits.

## Suspense, `use` & Network Composition

- [Compose Suspense, `use`, and Error Boundaries for async UI](compose-suspense-use-and-error-boundaries-for-async-ui.md): Cache promises for `use()`, use Suspense for the initial fallback, wrap later updates in transitions, and catch rejections with an Error Boundary.
- [Start server fetches early and unwrap promises with `use`](start-server-fetches-early-and-unwrap-promises-with-use.md): Initiate requests in a parent Server Component and either await them for server HTML or pass the promise to a Client Component.
