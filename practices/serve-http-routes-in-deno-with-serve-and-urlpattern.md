> Full index: [index-deno.md](index-deno.md)

# Serve Deno 2 HTTP apps with `Deno.serve` / `deno serve` and `URLPattern`

**When to use**: When writing HTTP APIs, static file servers, or lightweight routers in Deno 2.

**Rule**: Use Deno 2's built-in `Deno.serve` or export `{ fetch(req) } satisfies Deno.ServeDefaultExport` for `deno serve` (instead of the deprecated Deno 1 `std/http/server.ts` `serve` helper). Match paths with standard `URLPattern` and `@std/http` (`route`, `serveDir`) from `jsr:@std/http`, wrap route handlers in `try`/`catch` to return explicit `500` responses instead of crashing, and return `404` from a default fallback handler.

**Example**:
```ts
import { type Route, route, serveDir } from 'jsr:@std/http@1';

const routes: Route[] = [
  { pattern: new URLPattern({ pathname: '/' }), handler: () => new Response('Home') },
  { pattern: new URLPattern({ pathname: '/users/:id' }), handler: (_r, _i, p) => new Response(p?.pathname.groups.id) },
  { pattern: new URLPattern({ pathname: '/static/*' }), handler: (req) => serveDir(req) },
];

export default {
  fetch: route(routes, () => new Response('Not Found', { status: 404 })),
} satisfies Deno.ServeDefaultExport;
```

**Avoid**: Importing deprecated Deno 1 `https://deno.land/std/.../http/server.ts` APIs, or letting an unhandled handler exception kill the response without a `500` boundary.

**Source**: [Deno HTTP — Fireship Deno](https://fireship.dev/c/deno/app-routes), [Custom Router — Fireship Deno](https://fireship.dev/c/deno/app-custom-router), [deno-course — fireship-io](https://github.com/fireship-io/deno-course)
