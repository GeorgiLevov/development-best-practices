> Full index: [index-javascript.md](index-javascript.md)

# Distinguish `const` binding reassignment from object mutation and shallow-spread order

**When to use**: Whenever declaring variables, updating objects or arrays, or merging default configuration objects in JavaScript.

**Rule**: Treat `const` as locking the **variable label (assignment)**, never the internal contents of an object or array (`const obj = {}; obj.a = 1` still mutates the shared object, and `Object.freeze()` is only shallow). When deriving updated objects or arrays without side effects, create new copies with spread syntax (`{ ...obj, a: 1 }`, `[...arr, item]`), remembering that spread performs a **shallow** copy—nested objects/arrays still share references unless cloned at each modified level. Place `...defaults` *before* explicit overrides when merging objects (`{ ...defaults, ...userInput }`), because later keys overwrite earlier ones.

**Example**:
```js
const DEFAULT_USER = { role: 'member', theme: 'light' };

// Safe shallow override: defaults first, caller overrides second
const nextUser = { ...DEFAULT_USER, ...incomingOverrides, role: 'admin' };

// Nested update: clone nested level rather than mutating original.prefs
const updated = {
  ...account,
  prefs: { ...account.prefs, notifications: false },
};
```

**Avoid**: Assuming `const` or `Object.freeze(obj)` makes nested structures immutable, spreading `...defaults` *after* overrides, or forgetting that shallow spread leaves nested objects shared. For `var` function-scope, hoisting, and the temporal dead zone, see [Prefer `const` and `let` over function-scoped `var`, and respect the temporal dead zone](prefer-const-and-let-over-function-scoped-var.md).

**Source**: [Assignment Vs. Mutation — Joy of React](https://courses.joshwcomeau.com/joy-of-react/10-javascript-primer/11-assignment-vs-mutation), [Rest / Spread — Joy of React](https://courses.joshwcomeau.com/joy-of-react/10-javascript-primer/12-rest-spread), [Object.freeze() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze), [Variable Declarations (var vs let vs const) — Fireship Modern JavaScript](https://fireship.dev/c/modern-javascript/variable-declarations-var-vs-let-vs-const), [Spread — Fireship JavaScript](https://fireship.dev/c/js/102-spread)
