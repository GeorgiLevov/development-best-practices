> Full index: [index-react.md](index-react.md)

# Use a simple `range` helper with `.map()` for numeric JSX repetition

**When to use**: When rendering a dynamic number of repeated elements (ratings, grids, pagination) without an existing array.

**Rule**: Because `for` statements cannot sit inside JSX expression slots, keep a clear, small `range(start, end, step = 1)` utility (or Lodash's `range`) and pair it with `.map()` inside JSX. Write the helper with an explicit `for` loop rather than clever `Array.from({ length: ... })` one-liners that hide off-by-one or single-argument edge-case bugs.

**Example**:
```jsx
function range(start, end, step = 1) {
  const output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) output.push(i);
  return output;
}

{range(rating).map((n) => <StarIcon key={n} />)}
```

**Avoid**: Packing terse `Array.from({ length: (stop - start) / step + 1 }, ...)` formulas into JSX where single-argument calls (`range(5)`) silently return `[]`.

**Source**: [Range Utility — Joy of React](https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/08-range-util), [Lodash `range`](https://lodash.com/docs/4.17.15#range), [Clever Code Considered Harmful — Josh W. Comeau](https://www.joshwcomeau.com/career/clever-code-considered-harmful/)
