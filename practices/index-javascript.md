> Full index: [index.md](index.md)

# JavaScript Foundations for Modern React

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

## Data, Immutability, Scope & Control Flow

- [Distinguish `const` binding reassignment from object mutation and shallow-spread order](distinguish-const-reassignment-from-object-mutation.md): `const` locks variable labels, not object properties (`Object.freeze()` is shallow); clone changed nested levels explicitly and put `...defaults` before overrides.
- [Choose declarative array methods by return intent and ignore `for`-loop micro-optimizations](choose-declarative-array-methods-by-intent-over-for-micro-opts.md): Pick `.map()`, `.filter()`, `.find()`, `.some()`, `.every()`, and `.forEach()` by contract, wrap implicit arrow object returns in `({...})`, and profile before replacing clear chains.
- [Account for JavaScript's falsy edge cases and prefer `??` over `||` for defaults](prefer-explicit-truthiness-and-nullish-coalescing.md): Remember `[]` and `{}` are truthy, check `.length` explicitly, and use `??` instead of `||` when `0`, `''`, or `false` are valid inputs.
- [Rely on ES module isolation and pair named vs default exports deliberately](understand-es-module-scope-named-vs-default-exports.md): Keep module state private via ESM `import`/`export`, choose named vs default exports intentionally, and wrap arrow implicit objects in `(...)`.

## Timers, Events & Async Networking

- [Write self-documenting timer math, clean up global listeners symmetrically, and guard outside clicks with `.contains()`](write-readable-timers-symmetric-listeners-and-outside-click-guards.md): Show duration multiplication (`3 * 60 * 1000`), clear timer IDs, match `addEventListener`/`removeEventListener` references (or `AbortController`), and use `Node.contains()` for click-outside guards.
- [Check `fetch` `response.ok`, respect HTTP verb/status semantics, and cancel stale races with `AbortController`](check-fetch-response-ok-respect-http-semantics-and-abort-races.md): Always check `response.ok` (`fetch` only rejects on network/abort errors), honor HTTP methods/status classes, and abort superseded async requests cleanly.
