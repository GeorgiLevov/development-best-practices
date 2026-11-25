> Full index: [index-javascript.md](index-javascript.md)

# Rely on ES module isolation and pair named vs default exports deliberately

**When to use**: When organizing functions, constants, and components across JavaScript/TypeScript files.

**Rule**: Treat every `.js`/`.ts` file as an isolated ES module where unexported bindings remain private rather than leaking into a shared global scope. Use **named exports** (`export function formatDate() {}`) for multi-utility modules so callers import exact symbols by name (`import { formatDate } from './dates'`) and tree-shaking stays clean; reserve **default exports** (`export default Component`) for single primary module entities (imported without braces, matching the file's component name). Use explicit relative paths (`./`, `../`) or configured `@/*` aliases, and wrap arrow implicit object returns in parentheses (`x => ({ x })`) so `{}` is parsed as an expression, not a block.

**Example**:
```js
// helpers/math.js — explicit named exports keep internal helpers private
const INTERNAL_FACTOR = 2;
export const double = (n) => n * INTERNAL_FACTOR;
export const toPoint = (x, y) => ({ x, y });
```

**Avoid**: Attaching shared state to `window` to bypass module boundaries, mixing inconsistent `export default` + `export *` re-exports, or writing `x => { key: x }` without parentheses.

**Source**: [JavaScript Modules — Joy of React](https://courses.joshwcomeau.com/joy-of-react/10-javascript-primer/07-javascript-modules), [Arrow Functions — Joy of React](https://courses.joshwcomeau.com/joy-of-react/10-javascript-primer/04-arrow-functions), [Object Destructuring — Joy of React](https://courses.joshwcomeau.com/joy-of-react/10-javascript-primer/05-object-destructuring)
