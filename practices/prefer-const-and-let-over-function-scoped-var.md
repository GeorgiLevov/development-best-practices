> Full index: [index-javascript.md](index-javascript.md)

# Prefer `const` and `let` over function-scoped `var`, and respect the temporal dead zone

**When to use**: When declaring any JavaScript binding, especially inside loops, `if` blocks, or nested functions.

**Rule**: Default to `const`. Use `let` only when the binding will be reassigned. Do not use `var`. Bindings created with `var` are **function-scoped** and are hoisted as `undefined`, so a read before the declaration is silently `undefined` and loop or `if` variables leak to the whole function. `let` and `const` are **block-scoped** (`{ }`) and stay in a temporal dead zone until their declaration runs—accessing them earlier throws `ReferenceError`. `const` only forbids reassignment; object and array contents can still be mutated (see [Distinguish `const` binding reassignment from object mutation and shallow-spread order](distinguish-const-reassignment-from-object-mutation.md)). Hoisting is the **creation phase** of an execution context, not a rewrite that moves lines around; for the scope chain and closures, see [Reason about execution contexts, the scope chain, and closures](reason-about-execution-contexts-scope-chains-and-closures.md).

**Example**:
```js
function discount(prices, rate) {
  const out = [];
  for (let i = 0; i < prices.length; i++) {
    const next = prices[i] * (1 - rate);
    out.push(next);
  }
  return out; // `i` and `next` are not visible here
}
```

**Avoid**: Declaring with `var`, relying on a hoisted `undefined` read, or assuming `const` makes a nested object immutable.

**Source**: [Variable Declarations (var vs let vs const) — Fireship Modern JavaScript](https://fireship.dev/c/modern-javascript/variable-declarations-var-vs-let-vs-const), [Guide to Execution Contexts, Hoisting, Scopes, and Closures — Fireship Advanced JavaScript](https://fireship.dev/c/advanced-javascript/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript)
