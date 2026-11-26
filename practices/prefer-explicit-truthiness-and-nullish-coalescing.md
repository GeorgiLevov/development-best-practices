> Full index: [index-javascript.md](index-javascript.md)

# Account for JavaScript's falsy edge cases and prefer `??` over `||` for defaults

**When to use**: When defaulting optional numbers/strings/booleans or branching on values in JavaScript and JSX.

**Rule**: Remember JavaScript's falsy values (`false`, `0`, `-0`, `0n`, `''`, `null`, `undefined`, `NaN`) while empty arrays `[]` and empty objects `{}` are always **truthy** (check `.length === 0` or `Object.keys(obj).length === 0` explicitly). Use the nullish coalescing operator (`??`) instead of `||` whenever `0`, `''`, or `false` are legitimate values—`count || 10` silently clobbers `0` into `10`, whereas `count ?? 10` only falls back on `null` or `undefined`. The same `0`/`''`/`false` trap applies when filling in function arguments: use default parameters (they trigger only on `undefined`) or `??`, not `arg || fallback` (see [Apply default parameters only for `undefined`, not other falsy values](apply-default-parameters-only-for-undefined.md)). Keep `&&` and `||` for boolean logic or clear expression guards, never as clever substitutes for readable `if` statements. Pair `??` with optional chaining (`?.`) for safe nested defaults (see [Guard nullable property, index, and call chains with optional chaining (`?.`)](safely-access-nested-properties-with-optional-chaining.md)).

**Example**:
```js
// Preserves 0 and '' while falling back on null / undefined:
const pageLimit = config.limit ?? 20;
const hasItems = items.length > 0; // never `if (items)` alone!
```

**Avoid**: Testing `if (items)` or `if (errors)` to check emptiness (empty `[]`/`{}` are truthy), or defaulting numeric/boolean inputs with `value || fallback`.

**Source**: [Truthy and Falsy — Joy of React](https://courses.joshwcomeau.com/joy-of-react/10-javascript-primer/09-truthy-falsy), [Logical Operators — Joy of React](https://courses.joshwcomeau.com/joy-of-react/10-javascript-primer/10-logical-operators), [Default Parameters — Fireship Modern JavaScript](https://fireship.dev/c/modern-javascript/default-parameters), [Nullish Coalescing — Fireship JavaScript](https://fireship.dev/c/js/102-nullish-coalescing)
