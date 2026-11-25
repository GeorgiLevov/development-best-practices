> Full index: [index-react-fullstack.md](index-react-fullstack.md)

# Use App Router conventions, `next/link`, `next/navigation`, and awaited Next 15+ request APIs

**When to use**: When creating pages, layouts, dynamic segments, route handlers, and client navigation in Next.js App Router.

**Rule**: Define routes with `app/` file conventions (`page.js`, `layout.js`, `loading.js`, `route.js` for API endpoints) rather than the legacy `pages/` router. Navigate with `<Link href="...">` from `next/link` (never nesting an `<a>` child inside `<Link>`), use `next/image` for static or remote images (required `width`, `height`, and `alt`, plus `images.remotePatterns` in `next.config` for external hosts), and import `useRouter`, `usePathname`, and `useSearchParams` from `next/navigation` (never `next/router`), validating any user-controlled URLs before passing them to `router.push()` or `router.replace()`. In Next.js 15+, `params`, `searchParams`, `cookies()`, and `headers()` are asynchronous: always `await` them in Server Components, Route Handlers, and `generateMetadata` (or unwrap `params` with `React.use(params)` in Client Components).

**Example**:
```jsx
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ProfilePage({ params }) {
  const { profileId } = await params;
  const profile = await getProfile(profileId);
  if (!profile) notFound();

  return (
    <main>
      <h1>{profile.name}</h1>
      <Link href="/profiles">All profiles</Link>
    </main>
  );
}
```

**Avoid**: Mixing `next/router` into App Router components, wrapping `<a href>` inside `<Link>`, accessing `params.slug` synchronously in Next.js 15+, or passing unsanitized strings to `router.push()`.

**Source**: [Next.js App Router — Joy of React](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/03-nextjs), [Routing — Joy of React](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/04-routing), [Dynamic Routes — Next.js Docs](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes), [Sync Dynamic APIs — Next.js Docs](https://nextjs.org/docs/messages/sync-dynamic-apis), [useRouter — Next.js Docs](https://nextjs.org/docs/app/api-reference/functions/use-router), [Navigation — Fireship Next.js](https://fireship.dev/c/nextjs/project-nav), [nextjs-course — fireship-io](https://github.com/fireship-io/nextjs-course)
