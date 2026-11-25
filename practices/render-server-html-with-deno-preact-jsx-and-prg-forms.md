> Full index: [index-deno.md](index-deno.md)

# Render server HTML in Deno with Preact JSX, `303` PRG redirects, and canceled error bodies

**When to use**: When serving SSR HTML forms in Deno without a heavy frontend framework, or calling external APIs like OAuth providers from Deno.

**Rule**: Configure `"jsx": "react-jsx"` and `"jsxImportSource": "npm:preact"` in `deno.json` and render components with `render(...)` from `npm:preact-render-to-string` (`Content-Type: text/html`). On authenticated `POST` form handlers, check authorization and validate `await req.formData()`, persist the mutation, and respond with HTTP `303` + `Location` (Post/Redirect/Get) so browser refreshes do not resubmit the form. When a `fetch()` response fails (`!response.ok`) and you do not read its body, call `response.body?.cancel()` before throwing so Deno does not leak the underlying connection resource.

**Example**:
```ts
// After validating formData and saving:
return new Response(null, { status: 303, headers: { Location: '/links' } });

// When discarding an error response body in Deno:
if (!res.ok) {
  await res.body?.cancel();
  throw new Error(`Upstream HTTP ${res.status}`);
}
```

**Avoid**: Returning `200` directly from a `POST` form submission (causes duplicate submits on reload), or throwing on `!res.ok` in Deno without canceling or consuming `res.body`.

**Source**: [Built-in JSX — Fireship Deno](https://fireship.dev/c/deno/app-jsx), [User Auth — Fireship Deno](https://fireship.dev/c/deno/app-auth), [Form Submission — Fireship Deno](https://fireship.dev/c/deno/app-form), [Link Analytics — Fireship Deno](https://fireship.dev/c/deno/app-link-analytics), [deno-course — fireship-io](https://github.com/fireship-io/deno-course)
