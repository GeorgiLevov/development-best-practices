> Full index: [index-developer-mindset.md](index-developer-mindset.md)

# Measure performance before optimizing intuition-based bottlenecks

**When to use**: When considering a less readable optimization (avoiding inline arrows, shallow array clones, or conditional renders) based on gut instinct.

**Rule**: Do not sacrifice clarity to premature optimization traps. Benchmark suspicious paths directly with `console.time('label')` / `console.timeEnd('label')` (or DevTools profiler) and test on low-end hardware against the ~100ms human-perception threshold; modern JS engines execute thousands of shallow clones or inline callbacks in fractions of a millisecond, so optimize only proven bottlenecks.

**Example**:
```js
console.time('clone-update');
const nextItems = [...items];
nextItems[index] = nextValue;
console.timeEnd('clone-update');
```

**Avoid**: Mutating state in place, cluttering components with premature memoization, or complicating JSX handlers before measuring any real lag.

**Source**: [Showing and Hiding — Joy of React](https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/07.04-vs-hiding), [Specifying Arguments — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/02.01-args), [Mutation Bugs — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/06.01-mutation-bugs)
