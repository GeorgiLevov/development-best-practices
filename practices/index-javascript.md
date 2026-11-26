> Full index: [index.md](index.md)

# JavaScript Foundations for Modern React

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

## Data, Immutability, Scope & Control Flow

- [Distinguish `const` binding reassignment from object mutation and shallow-spread order](distinguish-const-reassignment-from-object-mutation.md): `const` locks variable labels, not object properties (`Object.freeze()` is shallow); clone changed nested levels explicitly and put `...defaults` before overrides.
- [Prefer `const` and `let` over function-scoped `var`, and respect the temporal dead zone](prefer-const-and-let-over-function-scoped-var.md): Default to `const`, use `let` only for reassignment, never `var`; `let`/`const` are block-scoped and throw in the temporal dead zone, while `var` is function-scoped and hoists as `undefined`.
- [Choose declarative array methods by return intent and ignore `for`-loop micro-optimizations](choose-declarative-array-methods-by-intent-over-for-micro-opts.md): Pick `.map()`, `.filter()`, `.find()`, `.some()`, `.every()`, and `.forEach()` by contract, wrap implicit arrow object returns in `({...})`, and profile before replacing clear chains.
- [Account for JavaScript's falsy edge cases and prefer `??` over `||` for defaults](prefer-explicit-truthiness-and-nullish-coalescing.md): Remember `[]` and `{}` are truthy, check `.length` explicitly, and use `??` (or default parameters) instead of `||` when `0`, `''`, or `false` are valid inputs.
- [Destructure objects, arrays, and option-bag parameters instead of positional unpacking](destructure-objects-arrays-and-option-bag-parameters.md): Extract, rename, default, and rest-collect object fields; destructure position-significant arrays; take an options object instead of long positional `null` placeholders.

## Syntax & Functions

- [Write object literals with shorthand properties and computed keys](write-object-literals-with-shorthand-and-computed-keys.md): Omit repeated `name: name` and `function` on methods, and set dynamic keys in the literal with `[key]: value`.
- [Interpolate and write multiline strings with template literals](interpolate-strings-with-template-literals.md): Use backticks and `${...}` instead of quote concatenation, escaped quotes, or hand-managed newlines.
- [Prefer arrow functions for lexical `this` and wrap implicit object returns](prefer-arrow-functions-for-lexical-this.md): Arrows close over outer `this` and cannot be constructors; wrap implicit object returns in `({...})`.
- [Apply default parameters only for `undefined`, not other falsy values](apply-default-parameters-only-for-undefined.md): Parameter defaults run only when the argument is `undefined`; do not emulate them with `||` when `0` is valid.

## Modules, Classes & Language Evolution

- [Rely on ES module isolation and pair named vs default exports deliberately](understand-es-module-scope-named-vs-default-exports.md): Keep module state private via ESM `import`/`export` (historically IIFEs, then CommonJS), keep static imports at the top level for tree-shaking, use `import()` for conditional loads, and wrap arrow implicit objects in `(...)`.
- [Prefer ES6 `class` syntax over hand-rolled constructor prototypes](prefer-es6-class-syntax-over-hand-rolled-prototypes.md): Use `class` / `constructor` / `new` as the readable prototype pattern; do not use arrow functions as constructors.
- [Declare public class fields and hide state with `#` private fields](declare-public-and-private-class-fields.md): Put instance and `static` fields on the class body, and use `#` (not `_`) for actually private state.
- [Ship only Stage 4 ECMAScript proposals in production](ship-only-stage-4-ecmascript-proposals-in-production.md): Treat TC39 Stages 0–2 as unstable, Stage 3 as nearly finished but still changing, and only Stage 4 / shipped language as a production contract.

## Timers, Events & Async Networking

- [Write self-documenting timer math, clean up global listeners symmetrically, and guard outside clicks with `.contains()`](write-readable-timers-symmetric-listeners-and-outside-click-guards.md): Show duration multiplication (`3 * 60 * 1000`), clear timer IDs, match `addEventListener`/`removeEventListener` references (or `AbortController`), and use `Node.contains()` for click-outside guards.
- [Check `fetch` `response.ok`, respect HTTP verb/status semantics, and cancel stale races with `AbortController`](check-fetch-response-ok-respect-http-semantics-and-abort-races.md): Always check `response.ok` (`fetch` only rejects on network/abort errors), honor HTTP methods/status classes, and abort superseded async requests cleanly.
- [Prefer `async`/`await` and `try`/`catch` over nested callbacks](prefer-async-await-and-try-catch-over-nested-callbacks.md): Prefer promises and `async`/`await` for sequential async work so control stays with the caller; handle rejections with `try`/`catch`, and use `await` only in an `async` function or at ES module top level.
