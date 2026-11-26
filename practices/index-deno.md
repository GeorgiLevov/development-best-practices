> Full index: [index.md](index.md)

# Deno 2 Runtime, Tooling, KV & HTTP

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

## Configuration, CLI & Tooling

- [Configure Deno 2 projects with `deno.json`, `jsr:`/`npm:` imports, tasks, and `--env`](configure-deno-json-tasks-env-lint-and-format.md): Use `deno.json` for `jsr:`/`npm:` imports, portable tasks, `lint`/`fmt` config, `--env` loading, and explicit sandbox permissions.
- [Guard Deno entrypoints with `import.meta.main` and build CLIs with `@std/cli`](guard-deno-cli-entrypoints-with-import-meta-main.md): Scaffold with `deno init`, guard script entrypoints via `if (import.meta.main)`, parse flags with `jsr:@std/cli/parse-args`, and use `prompt`/`confirm`/`Deno.exit`.
- [Write Deno tests, benchmarks, and API docs with built-in tooling and `@std`](write-deno-tests-and-benchmarks-with-std.md): Write `Deno.test` + `t.step()` assertions with `@std/assert`/`@std/expect`, benchmark with `Deno.bench` baselines, and generate HTML docs via `deno doc --html`.
- [Pass null-terminated buffers safely across Deno FFI (`Deno.dlopen`)](call-native-c-libraries-with-deno-ffi-safely.md): Declare C library symbols in `Deno.dlopen`, encode null-terminated `Uint8Array` strings with `TextEncoder`, and keep buffers alive across `Deno.UnsafePointer.of`.
- [Offload CPU-bound work to module Web Workers and terminate them cleanly](offload-cpu-work-to-module-web-workers.md): Run heavy synchronous tasks in `{ type: 'module' }` Web Workers via `postMessage` and terminate single-shot workers when finished.

## HTTP, KV Persistence & Realtime Streams

- [Serve Deno 2 HTTP apps with `Deno.serve` / `deno serve` and `URLPattern`](serve-http-routes-in-deno-with-serve-and-urlpattern.md): Export `Deno.ServeDefaultExport` (or use `Deno.serve`), match routes with `URLPattern` and `jsr:@std/http`, and wrap handlers in `try`/`catch` `500` boundaries.
- [Persist, index, and atomically update state in Deno KV](persist-and-transact-state-with-deno-kv.md): Model hierarchical array keys, sync secondary index keys in `kv.atomic().set(...).commit()`, query with `kv.list` + `kv.getMany`, and guard counter updates with `.check(entry)`.
- [Render server HTML in Deno with Preact JSX, `303` PRG redirects, and canceled error bodies](render-server-html-with-deno-preact-jsx-and-prg-forms.md): Configure `npm:preact` JSX in `deno.json`, return `303 Location` after `POST` forms, and call `response.body?.cancel()` on discarded failed fetches.
- [Stream server-to-client updates over SSE with `ReadableStream` and `EventSource`](stream-realtime-updates-over-sse-with-readablestream.md): Send `text/event-stream` `data: JSON\n\n` frames from a `ReadableStream` with `cancel()` cleanup and subscribe via browser `EventSource`.
