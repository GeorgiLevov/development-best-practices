> Full index: [index-javascript.md](index-javascript.md)

# Apply default parameters only for `undefined`, not other falsy values

**When to use**: When a function should fill in a missing argument without treating legitimate `0`, `''`, or `false` as absent.

**Rule**: Write defaults in the parameter list (`function price(total, tax = 0.05)`). A default runs only when the argument is `undefined` (omitted, or passed as `undefined`)—it does not run for `0`, `''`, `false`, or `null`. Do not emulate defaults with `arg || fallback` for numeric or other falsy-valid inputs; that is the same trap as preferring `??` over `||` in expressions (see [Account for JavaScript's falsy edge cases and prefer `??` over `||` for defaults](prefer-explicit-truthiness-and-nullish-coalescing.md)).

**Example**:
```js
function totalPrice(price, tax = 0.05, discount = 0) {
  return price * (1 + tax) * (1 - discount);
}

totalPrice(100);          // tax 0.05, discount 0
totalPrice(100, 0, 0.1);  // explicit 0 tax is kept, not replaced
```

**Avoid**: `const tax = tax || 0.05` (or the same inside a function body) when `0` is a valid rate, and assuming a default also replaces `null`.

**Source**: [Default Parameters — Fireship Modern JavaScript](https://fireship.dev/c/modern-javascript/default-parameters)
