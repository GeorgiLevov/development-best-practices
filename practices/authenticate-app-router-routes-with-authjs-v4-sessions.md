> Full index: [index-react-fullstack.md](index-react-fullstack.md)

# Authenticate App Router routes with Auth.js / next-auth v4 sessions

**When to use**: When adding sign-in to a Next.js App Router app and deciding how to read or require a session in Server Components, Client Components, and Route Handlers.

**Rule**: This pattern applies to **Auth.js / next-auth v4**, which is what the Fireship Next.js course and its demo repo use (`next-auth@^4`). Auth.js v5 uses a different entry point (`auth()`, `handlers`, a central `auth.ts`)—do not mix the two APIs. In v4: export `authOptions` (providers, optional Prisma adapter, `secret`) and a Route Handler at `app/api/auth/[...nextauth]/route.ts` that re-exports `NextAuth(authOptions)` as `GET` and `POST`. Store `NEXTAUTH_SECRET` (and provider keys) in the environment. Wrap the root layout in a Client Component `SessionProvider`. In Server Components, Route Handlers, and `redirect()` gates, call `getServerSession(authOptions)` and redirect unauthenticated users to the sign-in route. In Client Components, call `useSession()` for status and `signIn` / `signOut`. Persist users with the official Prisma adapter rather than hand-rolling auth tables when you need a database-backed user store.

**Example**:
```ts
// app/api/auth/[...nextauth]/route.ts (next-auth v4)
import NextAuth, { type NextAuthOptions } from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
```

```ts
// Server Component / page
const session = await getServerSession(authOptions);
if (!session) redirect('/api/auth/signin');
```

**Avoid**: Mixing v4 `getServerSession` / `NextAuthOptions` with v5 `auth()` in the same app, reading the session only on the client when a Server Component could gate the page, or omitting `NEXTAUTH_SECRET`.

**Source**: [Auth.js Setup — Fireship Next.js](https://fireship.dev/c/nextjs/auth-setup), [Check Auth State — Fireship Next.js](https://fireship.dev/c/nextjs/auth-state), [SignIn Buttons — Fireship Next.js](https://fireship.dev/c/nextjs/auth-login-button), [Protect Routes — Fireship Next.js](https://fireship.dev/c/nextjs/auth-protect-routes), [Auth Data Store — Fireship Next.js](https://fireship.dev/c/nextjs/db-auth), [nextjs-course — fireship-io](https://github.com/fireship-io/nextjs-course), [Auth.js](https://authjs.dev/getting-started)
