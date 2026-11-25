> Full index: [index-deno.md](index-deno.md)

# Write Deno tests, benchmarks, and API docs with built-in tooling and `@std`

**When to use**: When testing, benchmarking, or generating documentation for Deno TypeScript modules.

**Rule**: Use `Deno.test` with `t.step()` for multi-step or async tests and import assertions from `jsr:@std/assert` (`assertEquals`, `assertRejects`, `assertMatch`) or `jsr:@std/expect`. When comparing performance alternatives (such as a precompiled `RegExp` vs recreating one per call), use `Deno.bench` with a `baseline: true` case rather than guessing. Document exported symbols with JSDoc and generate static docs with `deno doc --html`.

**Example**:
```ts
import { assertEquals } from 'jsr:@std/assert';

Deno.test('slug helper', async (t) => {
  await t.step('lowercases and trims', () => {
    assertEquals(' Hi '.trim().toLowerCase(), 'hi');
  });
});
```

**Avoid**: Pulling in external test runners when `deno test` + `@std/assert` already covers async, rejection, and step assertions, or optimizing regexes/loops without a `Deno.bench` baseline.

**Source**: [Testing — Fireship Deno](https://fireship.dev/c/deno/basics-testing), [Deno Bench — Fireship Deno](https://fireship.dev/c/deno/basics-benchmark), [Instant Docs — Fireship Deno](https://fireship.dev/c/deno/basics-docs), [deno-course — fireship-io](https://github.com/fireship-io/deno-course)
