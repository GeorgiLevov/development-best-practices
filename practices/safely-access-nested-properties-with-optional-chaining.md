> Full index: [index-javascript.md](index-javascript.md)

# Guard nullable property, index, and call chains with optional chaining (`?.`)

**When to use**: When reading nested properties, array elements, or optional callbacks on objects that may be `null` or `undefined`.

**Rule**: Use ES2020 optional chaining (`obj?.prop`, `arr?.[0]`, `fn?.()`) to short-circuit to `undefined` instead of throwing `TypeError: Cannot read properties of undefined`. Remember that `?.` only guards the value immediately to its left: in a multi-level chain like `err?.response?.data?.message`, apply `?.` at every nullable step. Pair `?.` with `??` when you want a fallback (`user?.name ?? 'Guest'`).

**Example**:
```js
const city = user?.address?.city ?? 'Unknown';
const firstTag = post?.tags?.[0];
onSuccess?.(city);
```

**Avoid**: Guarding only the root (`err?.response.data.message`) when intermediate properties can also be missing, or defaulting the result with `||` when `0` or `''` is valid.

**Source**: [Optional Chaining — Fireship JavaScript](https://fireship.dev/c/js/102-optional-chaining)
