> Full index: [index-deno.md](index-deno.md)

# Offload CPU-bound work to module Web Workers and terminate them cleanly

**When to use**: When running heavy synchronous computations (e.g., recursive math, parsing, or batch transforms) in Deno or browsers without blocking the main event loop.

**Rule**: Spawn an ES-module worker with `new Worker(new URL('./worker.ts', import.meta.url).href, { type: 'module' })`, exchange structured payloads via `postMessage` / `onmessage`, and call `worker.terminate()` (or `self.close()` inside the worker) once single-shot jobs complete so threads and memory do not leak.

**Example**:
```ts
const worker = new Worker(new URL('./worker.ts', import.meta.url).href, {
  type: 'module',
});
worker.postMessage({ n: 40 });
worker.onmessage = (event) => {
  console.log(event.data);
  worker.terminate();
};
```

**Avoid**: Blocking the single main thread with CPU-heavy loops, omitting `{ type: 'module' }`, or leaving finished one-off workers running indefinitely.

**Source**: [Multi-Threading — Fireship Deno](https://fireship.dev/c/deno/cli-workers)
