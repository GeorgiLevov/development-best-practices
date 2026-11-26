> Full index: [index.md](index.md)

# Full-Stack React, Next.js & Server Architecture

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

## Rendering Models, RSCs & Client Boundaries

- [Choose CSR, SSR, SSG, or ISR by data freshness and interactivity needs](choose-rendering-strategy-csr-ssr-ssg-isr.md): Match rendering mode and caching to data freshness and access control, balancing immediate LCP HTML against hydration cost.
- [Keep static, secret-bearing, and heavy-dependency rendering in React Server Components](default-to-react-server-components-and-async-data.md): Default to `async` RSCs for zero-bundle server work and treat `'use server'` strictly as client-callable Server Actions with input authorization.
- [Push `"use client"` boundaries down to interactive leaves and pass Server Components via `children`](minimize-use-client-boundaries-with-children-composition.md): Keep pages and layouts as Server Components by isolating client interactivity in leaves/wrappers and slotting RSCs via `children`.
- [Keep SSR Client Components browser-safe and prevent hydration mismatches without flashes](avoid-ssr-hydration-mismatches-with-two-pass-and-css.md): Use two-pass `null` rendering + `useEffect` for `localStorage`, CSS media queries over `useMediaQuery`, and narrow `suppressHydrationWarning` only for live text leaves.

## App Router, State Persistence & Static/Dynamic Builds

- [Use App Router conventions, `next/link`, `next/navigation`, and awaited Next 15+ request APIs](follow-nextjs-app-router-and-async-params-conventions.md): Use `app/` conventions, `next/link` without nested `<a>`, `next/image` with width/height/alt, sanitized `next/navigation` routing, and `await` on Next 15+ `params`/`searchParams`/`cookies()`.
- [Persist cross-route flash messages in a shared layout Provider instead of route-local state](persist-cross-route-ui-state-in-shared-layouts.md): Host toast/media providers in a shared `layout.js` wrapper so state survives `router.push()`, and organize layouts cleanly with `(route-groups)`.
- [Test production builds locally and audit client bundle impact with `@next/bundle-analyzer`](audit-nextjs-production-builds-and-bundle-size.md): Configure `@/*` aliases, test `npm run build && npm run start` (keep `"start"` clean, add `"start:local"`), and inspect client chunks with `@next/bundle-analyzer`.
- [Keep Next.js routes static where possible and explicitly configure dynamic or traced segments](configure-static-dynamic-rendering-and-file-tracing.md): Pre-build finite routes via `generateStaticParams()`, use `dynamic` / `revalidate` segment configs or `'use cache'` explicitly, `await` Next 15 `params`, trace dynamic `fs` assets with `outputFileTracingIncludes`, and avoid disk writes.

## Metadata, Caching, Streaming & Lazy Loading

- [Define route metadata with `generateMetadata` and deduplicate server work via `React.cache`](deduplicate-server-work-with-react-cache-and-metadata.md): Export `metadata`/`generateMetadata` on server routes and wrap shared per-request DB/FS helpers in module-level `React.cache()` with primitive args.
- [Draw deliberate Suspense boundaries for Streaming SSR and share shell wrappers with `loading.js`](design-suspense-boundaries-for-streaming-ssr.md): Stream fast shells immediately around slow async RSCs, share layout wrappers between `page.js` and `loading.js` (status or skeleton), and avoid Spinner Hell or transition fallbacks.
- [Lazy-load heavy client widgets behind `next/dynamic` or `React.lazy` facade components](lazy-load-heavy-client-widgets-behind-facades.md): Code-split heavy client libraries with static `import(...)` literals (`ssr: false` in Client Components) behind producer-side facade components.
- [Read theme cookies on the server and mutate `<html>` CSS variables directly on toggle](implement-flicker-free-ssr-dark-mode-with-cookies-and-css-vars.md): Read theme cookies in `RootLayout` to stamp `<html>` tokens pre-paint and update `document.documentElement` CSS vars directly instead of calling `router.refresh()`.
- [Render MDX in Server Components with centralized component maps and `"use client"` dynamic facades](render-mdx-content-with-component-maps-and-client-facades.md): Use `@next/mdx` or `next-mdx-remote-client` over archived `next-mdx-remote`, share one `COMPONENT_MAP`, and always mark `next/dynamic` MDX facades `'use client'`.
- [Return real 404s via `notFound()`, serve XML feeds via Route Handlers, and tune `<Link prefetch>` deliberately](handle-nextjs-404s-rss-routes-and-link-prefetch-tradeoffs.md): Catch missing slugs to call `notFound()` with `app/not-found.js`, serve `/rss.xml` via `route.js`, and weigh `prefetch={true}` cold-start gains against stale windows and bandwidth/cost.

## Auth, Route Handlers, Errors & Client Refresh

- [Authenticate App Router routes with Auth.js / next-auth v4 sessions](authenticate-app-router-routes-with-authjs-v4-sessions.md): In next-auth v4, export `authOptions` from a `[...nextauth]` Route Handler, wrap the tree in `SessionProvider`, use `getServerSession(authOptions)` on the server and `useSession` on the client, and redirect when unauthenticated (Auth.js v5 uses a different API).
- [Export App Router JSON Route Handlers and authorize mutations against the session](export-json-route-handlers-and-authorize-mutations.md): Export `GET`/`POST`/`DELETE` from `app/api/.../route.ts` with `NextResponse.json`, authorize mutations from the session, and model many-to-many joins with a composite key.
- [Refresh Server Components after client mutations with `router.refresh()` in `startTransition`](refresh-server-components-after-client-mutations-with-router-refresh.md): Let an RSC read data and pass it to a Client leaf; after `fetch`, call `startTransition(() => router.refresh())` instead of a full reload.
- [Colocate App Router `error.js` as a Client Component with a `reset` action](colocate-app-router-error-ui-as-a-client-component-with-reset.md): Place `'use client'` `error.tsx` next to the segment, log `error`, and call `reset()` from a retry control.
