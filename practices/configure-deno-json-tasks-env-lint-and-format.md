> Full index: [index-deno.md](index-deno.md)

# Configure Deno 2 projects with `deno.json`, `jsr:`/`npm:` imports, tasks, and `--env`

**When to use**: When starting a Deno 2 TypeScript/JavaScript project, configuring scripts, formatting/linting, or loading `.env` secrets.

**Rule**: Use `deno.json` as the central manifest in Deno 2: define `"imports"` using `jsr:` and `npm:` specifiers (instead of legacy unpinned URL imports or Deno 1 import-map files), put project commands under `"tasks"` (`--watch`, `npm:` scripts, and portable `;`, `&&`, `||`, `&` chaining), and configure `"lint"` and `"fmt"` include/exclude rules there. Load local `.env` files explicitly with `--env` (or `--env-file=.env`) and read variables with `Deno.env.get('NAME')`. Deno executes in a sandbox where filesystem, network, and environment access stay denied unless granted (`--allow-read`, `--allow-net`, `--allow-env`, or `-A` only in trusted local dev).

**Example**:
```json
{
  "tasks": {
    "dev": "deno serve --watch --env -A src/main.ts",
    "test": "deno test tests/"
  },
  "imports": {
    "@std/assert": "jsr:@std/assert@1",
    "@std/http": "jsr:@std/http@1"
  },
  "fmt": { "singleQuote": true, "include": ["src/", "tests/"] }
}
```

**Avoid**: Importing unversioned third-party URLs across files instead of pinning `jsr:` / `npm:` entries in `deno.json`, committing `.env` secrets, or running untrusted code with `-A`.

**Source**: [Under the Hood — Fireship Deno](https://fireship.dev/c/deno/basics-deno-internals), [Modules — Fireship Deno](https://fireship.dev/c/deno/basics-modules), [Tasks — Fireship Deno](https://fireship.dev/c/deno/basics-tasks), [Env Vars — Fireship Deno](https://fireship.dev/c/deno/basics-env-vars), [Clean Code — Fireship Deno](https://fireship.dev/c/deno/basics-lint-fmt), [deno-course — fireship-io](https://github.com/fireship-io/deno-course)
