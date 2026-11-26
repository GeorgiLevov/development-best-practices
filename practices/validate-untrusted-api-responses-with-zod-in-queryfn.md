> Full index: [index-react-data-fetching.md](index-react-data-fetching.md)

# Validate untrusted API payloads at runtime with Zod inside `queryFn`

**When to use**: When consuming third-party or loosely typed APIs whose response shapes could drift at runtime.

**Rule**: Parse external JSON responses with a runtime schema (e.g., `zod`'s `schema.parse(data)` + `z.infer<typeof schema>`) directly inside `queryFn`. Invalid responses throw synchronously so TanStack Query transitions into `'error'` immediately instead of crashing later during render (`Cannot read properties of undefined`), while Zod strips unreferenced fields to shrink cached memory. Weigh the runtime parsing cost on very large payloads—for first-party end-to-end typed APIs you control, static TypeScript types may be sufficient.

**Example**:
```ts
const RepoSchema = z.object({ id: z.number(), name: z.string() });
type Repo = z.infer<typeof RepoSchema>;

async function fetchRepo(id: string): Promise<Repo> {
  const res = await fetch(`/api/repos/${id}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return RepoSchema.parse(await res.json());
}
```

**Avoid**: Trusting `res.json() as ExpectedType` blindly from external APIs, or running expensive full-payload schema parses on huge first-party arrays without measuring cost.

**Source**: [Validating Query Data — Fireship Query](https://fireship.dev/c/query/validating-query-data)
