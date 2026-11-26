> Full index: [index-javascript.md](index-javascript.md)

# Check `fetch` `response.ok`, respect HTTP verb/status semantics, and cancel stale races with `AbortController`

**When to use**: Whenever issuing HTTP requests with `fetch` and `async`/`await`, especially when rapidly changing inputs can trigger out-of-order responses.

**Rule**: Remember that `fetch()` only rejects its promise on network or abort failures—HTTP `4xx` and `5xx` responses resolve normally with `response.ok === false`. Always inspect `response.ok` before parsing JSON, and structure `try/catch` around `async`/`await` calls while honoring HTTP semantics (`GET` reads, `POST` creates, `PUT`/`PATCH` update, `DELETE` removes; `2xx` success, `3xx` redirect, `4xx` client error, `5xx` server error). When user input can fire overlapping requests whose responses return out of order, pass an `AbortController` `signal` (or track a stale-ignore boolean in cleanup) so earlier responses never overwrite newer state. On server endpoints, catch upstream errors inside `try`/`catch` and return an explicit HTTP `500` with a safe error message (never exposing raw stack traces or API keys kept in `.env`).

**Example**:
```js
const controller = new AbortController();
try {
  const res = await fetch(`/api/quote?qty=${qty}`, { signal: controller.signal });
  if (!res.ok) throw new Error(`Request failed: HTTP ${res.status}`);
  const data = await res.json();
  applyQuote(data);
} catch (err) {
  if (err.name !== 'AbortError') showError(err);
}
// On cleanup / next request: controller.abort();
```

**Avoid**: Assuming `try/catch` catches HTTP 404/500 responses without checking `res.ok`, treating `AbortError` as a user-facing crash, or letting slower stale requests overwrite newer UI state.

**Source**: [Async / Await — Joy of React](https://courses.joshwcomeau.com/joy-of-react/10-javascript-primer/15-async-await), [HTTP Methods & Status Codes — Joy of React](https://courses.joshwcomeau.com/joy-of-react/10-javascript-primer/16-http-methods), [Fetch Race Condition — Joy of React](https://courses.joshwcomeau.com/joy-of-react/bonus-job-hunting-kit/05.10-race-condition), [AbortController — MDN](https://developer.mozilla.org/en-US/docs/Web/API/AbortController), [HTTP Status Codes — MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status), [Effects Part 2 — react.gg](https://fireship.dev/c/react/effects-part-2), [Error Handling — Fireship JavaScript](https://fireship.dev/c/js/app-error-handling)
