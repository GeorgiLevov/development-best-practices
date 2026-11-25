> Full index: [index-javascript.md](index-javascript.md)

# Ship only Stage 4 ECMAScript proposals in production

**When to use**: When deciding whether a new JavaScript language feature, conference demo, or Babel/syntax plugin is safe to depend on in shipped code.

**Rule**: JavaScript evolves as **ECMAScript** (ECMA-262), overseen by TC39. A proposal advances only by committee consensus: Stage 0–1 are exploratory, Stage 2 is a draft whose syntax and semantics can still change, Stage 3 is nearly complete but still gathering implementor and user feedback, and Stage 4 is finished (tests plus two compatible implementations, then it enters that year's spec). Treat only Stage 4 / already-shipped language as a production contract. Preview tooling can run earlier stages, but those features may still iterate or stall.

**Example**:
```js
// Safe: optional chaining and nullish coalescing are Stage 4 / shipped.
const city = user.address?.city ?? 'unknown';
```

**Avoid**: Shipping Stage 0–2 syntax because a blog or a transform made it run locally, or treating a Stage 3 preview as a frozen language guarantee.

**Source**: [ECMAScript, TC39, and the Standardization Process — Fireship Modern JavaScript](https://fireship.dev/c/modern-javascript/ecmascript)
