> Full index: [index-javascript.md](index-javascript.md)

# Choose declarative array methods by return intent and ignore `for`-loop micro-optimizations

**When to use**: When transforming, filtering, searching, or testing collections in JavaScript and JSX.

**Rule**: Pick array iteration methods by their exact contract: `.map()` transforms 1-to-1 into an equal-length array (never to skip items or run side effects—wrap implicit object-literal arrow returns in `=> ({ ... })`), `.filter()` selects a subset, `.find()` returns the first match, `.some()`/`.every()` return booleans, and `.forEach()` returns `undefined` (for imperative side effects only). Prefer readable chained array methods over imperative `for` loops unless profiling proves an actual bottleneck—JS engines optimize array iteration well, and manual `for` conversions rarely improve real user responsiveness.

**Example**:
```js
const activeAdmins = users
  .filter((user) => user.isActive && user.role === 'admin')
  .map((user) => ({ id: user.id, label: user.name }));

const allVerified = activeAdmins.every((user) => Boolean(user.id));
```

**Avoid**: Using `.map()` just to loop with side effects, returning `undefined` inside `.map()` to omit elements instead of chaining `.filter().map()`, or rewriting clear array pipelines into `for` loops prematurely.

**Source**: [Array Iteration Methods — Joy of React](https://courses.joshwcomeau.com/joy-of-react/10-javascript-primer/08-array-iteration-methods), [Performance — Joy of React](https://courses.joshwcomeau.com/joy-of-react/10-javascript-primer/08.01-performance), [Arrow Functions — Joy of React](https://courses.joshwcomeau.com/joy-of-react/10-javascript-primer/04-arrow-functions), [Array — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
