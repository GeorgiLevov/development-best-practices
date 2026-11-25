> Full index: [index-react-hooks.md](index-react-hooks.md)

# Model async `fetch` lifecycles with explicit status unions and `.ok` checks

**When to use**: Whenever performing `fetch()` requests in React event handlers, custom hooks, or fetcher helpers.

**Rule**: Represent request lifecycles with an explicit status union (`'idle' | 'loading' | 'success' | 'error'`, plus `'empty'` when zero results differ from initial idle) rather than overlapping boolean flags (`isLoading`, `hasError`) that allow impossible states. Always check `if (!response.ok)` after `await fetch(...)` (since HTTP `4xx`/`5xx` responses resolve rather than rejecting the Promise) and wrap both `fetch` and `response.json()` in `try/catch`. Encode query parameters with `encodeURIComponent()` or `URLSearchParams`, and verify trailing-slash API paths so `301`/`308` redirects do not trigger CORS failures.

**Example**:
```jsx
async function handleSearch(query) {
  setStatus('loading');
  try {
    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    const data = await res.json();
    setResults(data.items);
    setStatus(data.items.length > 0 ? 'success' : 'empty');
  } catch (err) {
    setStatus('error');
  }
}
```

**Avoid**: Assuming `fetch()` rejects on `404`/`500` responses, mixing independent `isLoading`/`isError` booleans into contradictory UI states, or interpolating raw user input into URLs.

**Source**: [Data Fetching — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/07-data-fetching), [Fetching on Event — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/07.01-fetching-on-event), [Fetch Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/07.03-fetch-exercises), [Effects Part 2 — react.gg](https://fireship.dev/c/react/effects-part-2), [Country Info — react.gg](https://fireship.dev/c/react/country-info-challenge), [Hacker News — react.gg](https://fireship.dev/c/react/hacker-news-challenge)
