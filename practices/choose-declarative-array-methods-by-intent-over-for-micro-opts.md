> Full index: [index-javascript.md](index-javascript.md)

# Choose declarative array methods by return intent and ignore `for`-loop micro-optimizations

**When to use**: When transforming, filtering, searching, or testing collections in JavaScript and JSX.

**Rule**: Pick array iteration methods by their exact contract: `.map()` transforms 1-to-1 into an equal-length array (never to skip items or run side effects—wrap implicit object-literal arrow returns in `=> ({ ... })`), `.filter()` selects a subset, `.find()` returns the first match, `.some()`/`.every()` return booleans, `.reduce()` folds a collection into a single summary value (such as a cumulative sum), and `.forEach()` returns `undefined` (for imperative side effects only). Use `[...new Set(arr)]` to deduplicate primitives cleanly and `for (const [index, value] of arr.entries())` when you need both index and item. Prefer readable chained array methods over imperative `for` loops unless profiling proves an actual bottleneck—JS engines optimize array iteration well, and manual `for` conversions rarely improve real user responsiveness. When you need a new array, favor non-mutating methods (`.concat`, `.slice`, `.map`, `.filter`, or spread) over mutating `.push`, `.pop`, `.shift`, `.unshift`, `.splice`, or in-place `.sort`. Convert array-like values such as `arguments` with `Array.from(...)` (or `[...]`) before calling `Array.prototype` methods—they are not real arrays until you do.

**Example**:
```js
const activeAdmins = users
  .filter((user) => user.isActive && user.role === 'admin')
  .map((user) => ({ id: user.id, label: user.name }));

const allVerified = activeAdmins.every((user) => Boolean(user.id));
```

**Avoid**: Using `.map()` just to loop with side effects, returning `undefined` inside `.map()` to omit elements instead of chaining `.filter().map()`, rewriting clear array pipelines into `for` loops prematurely, mutating arrays in place when a new array is required, or calling `.map`/`.reduce` on `arguments` without `Array.from`.

**Source**: [Array Iteration Methods — Joy of React](https://courses.joshwcomeau.com/joy-of-react/10-javascript-primer/08-array-iteration-methods), [Performance — Joy of React](https://courses.joshwcomeau.com/joy-of-react/10-javascript-primer/08.01-performance), [Arrow Functions — Joy of React](https://courses.joshwcomeau.com/joy-of-react/10-javascript-primer/04-arrow-functions), [Array — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [(Bonus) JavaScript Array Methods you should know — Fireship Advanced JavaScript](https://fireship.dev/c/advanced-javascript/javascript-array-methods-you-should-know), [Array Tricks — Fireship JavaScript](https://fireship.dev/c/js/102-array-tricks), [Cumulative Sum — Fireship JavaScript](https://fireship.dev/c/js/algo-sum)
