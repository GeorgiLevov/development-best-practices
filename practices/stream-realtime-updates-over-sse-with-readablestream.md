> Full index: [index-deno.md](index-deno.md)

# Stream server-to-client updates over SSE with `ReadableStream` and `EventSource`

**When to use**: When pushing one-way realtime updates (analytics, job progress, KV watch changes) from a server endpoint to a browser without full WebSocket overhead.

**Rule**: Return a `ReadableStream` with `Content-Type: text/event-stream`, `Cache-Control: no-cache`, and `Connection: keep-alive`. Encode each payload as UTF-8 `data: ${JSON.stringify(payload)}\n\n` frames and always implement `cancel()` on the stream to close the underlying watcher/reader when the client disconnects. On the browser side, subscribe with `new EventSource(url)`, parse `event.data`, and close the `EventSource` cleanly on unrecoverable errors.

**Example**:
```ts
const reader = kv.watch([['links', code]]).getReader();
const body = new ReadableStream({
  async start(controller) {
    while (true) {
      const { done } = await reader.read();
      if (done) return;
      controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ updated: true })}

`));
    }
  },
  cancel() {
    reader.cancel();
  },
});
return new Response(body, { headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache' } });
```

**Avoid**: Omitting the double newline (`\n\n`) SSE frame terminator, or omitting `cancel()` on the `ReadableStream` (which leaks database watchers after clients disconnect).

**Source**: [Realtime Streams — Fireship Deno](https://fireship.dev/c/deno/app-realtime), [deno-course — fireship-io](https://github.com/fireship-io/deno-course)
