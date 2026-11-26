> Full index: [index-react-fullstack.md](index-react-fullstack.md)

# Export App Router JSON Route Handlers and authorize mutations against the session

**When to use**: When exposing JSON APIs from the App Router (`app/api/.../route.ts`) for reads or for client-initiated creates/deletes.

**Rule**: Prefer App Router Route Handlers over the Pages Router `pages/api` folder: export named functions (`GET`, `POST`, `PUT`, `DELETE`) from `route.ts` and return `NextResponse.json(...)`. Keep public reads simple; for mutations, require a session (`getServerSession(authOptions)` in next-auth v4) and derive the actor from that session rather than trusting a client-supplied user id. Model many-to-many relations (for example follows) as an explicit join table with a composite primary key instead of leftover arrays on a user row. For form-driven mutations, prefer Server Actions with `revalidatePath` when they fit (see [Keep static, secret-bearing, and heavy-dependency rendering in React Server Components](default-to-react-server-components-and-async-data.md)); keep Route Handlers when the client needs a fetch-based API.

**Example**:
```ts
// app/api/follows/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { targetId } = await req.json();
  // create the follow row for session.user, not a client-supplied actor id
  return NextResponse.json({ ok: true, targetId });
}
```

**Avoid**: Accepting the current user id from the request body, or putting JSON APIs in `pages/api` in a new App Router project.

**Source**: [API Routes — Fireship Next.js](https://fireship.dev/c/nextjs/project-api), [API Route Fetching — Fireship Next.js](https://fireship.dev/c/nextjs/db-api), [Follower System (endpoint) — Fireship Next.js](https://fireship.dev/c/nextjs/adv-post-endpoint), [Follower System (relational data) — Fireship Next.js](https://fireship.dev/c/nextjs/adv-relational-data), [nextjs-course — fireship-io](https://github.com/fireship-io/nextjs-course)
