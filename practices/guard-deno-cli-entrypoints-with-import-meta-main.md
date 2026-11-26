> Full index: [index-deno.md](index-deno.md)

# Guard Deno entrypoints with `import.meta.main` and build CLIs with `@std/cli`

**When to use**: When writing Deno modules that both export functions and run as a CLI script, or when parsing flags and prompts.

**Rule**: Scaffold with `deno init` and wrap top-level script execution in `if (import.meta.main)` so importing helpers from another file (or test) does not trigger side effects. Parse CLI flags with `parseArgs` from `jsr:@std/cli/parse-args` over `Deno.args`, use web-standard `prompt()` / `confirm()` for interactive checks, and exit with `Deno.exit(code)` on abort. Add `/// <reference lib="dom" />` only in files that intentionally target browser DOM types.

**Example**:
```ts
import { parseArgs } from 'jsr:@std/cli/parse-args';

export function greet(name: string) {
  return `Hello, ${name}`;
}

if (import.meta.main) {
  const flags = parseArgs(Deno.args, { string: ['name'], default: { name: 'world' } });
  console.log(greet(flags.name));
}
```

**Avoid**: Executing CLI side effects at module top level without `import.meta.main`, or hand-slicing `Deno.args` when `@std/cli/parse-args` handles booleans, strings, and defaults.

**Source**: [Hello Deno — Fireship Deno](https://fireship.dev/c/deno/basics-hello-world), [WTF is meta.main? — Fireship Deno](https://fireship.dev/c/deno/basics-meta-main), [TypeScript Crash Course — Fireship Deno](https://fireship.dev/c/deno/basics-typescript), [Deno Args — Fireship Deno](https://fireship.dev/c/deno/cli-tool)
