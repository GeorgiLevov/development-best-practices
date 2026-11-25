> Full index: [index-react-concurrent.md](index-react-concurrent.md)

# Start server fetches early and unwrap promises with `use`

**When to use**: When a Server Component tree fetches data for a mix of static layout and interactive children, and you want Suspense/Error Boundaries to apply across the network rather than after a client `useEffect`.

**Rule**: Start the request in a parent Server Component as soon as you know the key, then either `await` it on the server when you can emit the finished HTML, or pass the promise down to a Client Component that unwraps it with `use()`. Passing the promise lets the child suspend independently under its own boundary; awaiting in the parent blocks that parent until the data is ready, which is the right choice when you also want to render the resulting markup on the server and keep the payload out of the client bundle. Because Server Components do not re-render, you do not need the client-side promise cache required by `use()` on the client. Keep `'use client'` on the smallest interactive leaves; the rest of the template can stay on the server.

**Example**:
```jsx
// Server Component
async function Page({ id }) {
  const itemPromise = fetchItem(id);
  return (
    <Suspense fallback={<Skeleton />}>
      <ItemDetails itemPromise={itemPromise} />
    </Suspense>
  );
}

// Client Component
function ItemDetails({ itemPromise }) {
  const item = React.use(itemPromise);
  return <InteractiveCard item={item} />;
}
```

**Avoid**: Waiting to fetch until a Client Component mounts, or shipping a large resolved payload (or an unneeded promise) to the client when the server could have rendered that section.

**Source**: [Composing the Network — react.gg](https://fireship.dev/c/react/composing-the-network), [Book Router — react.gg](https://fireship.dev/c/react/book-router-challenge), [use — React Docs](https://react.dev/reference/react/use), [Server Components — React Docs](https://react.dev/reference/rsc/server-components)
