> Full index: [index-deno.md](index-deno.md)

# Persist, index, and atomically update state in Deno KV

**When to use**: When storing application records, user secondary indexes, or counters in Deno KV (`Deno.openKv()`).

**Rule**: Open the store with `await Deno.openKv()` (requiring `--unstable-kv` outside Deno Deploy in Deno 2.0–2.x) and model hierarchical keys as string arrays (`['shortlinks', code]`). When a record must be queried by a secondary key (such as `[userId, code]`), write both entries in one `kv.atomic().set(...).set(...).commit()` transaction, then fetch pages with `kv.list({ prefix })` + `kv.getMany()`. For read-modify-write updates like incrementing counters, pass the read entry to `.check(entry)` inside `kv.atomic()` and inspect `res.ok` so concurrent updates cannot clobber one another.

**Example**:
```ts
const kv = await Deno.openKv();

export async function recordClick(code: string) {
  const key = ['shortlinks', code];
  const entry = await kv.get<{ clicks: number }>(key);
  if (!entry.value) return false;
  const res = await kv.atomic()
    .check(entry)
    .set(key, { ...entry.value, clicks: entry.value.clicks + 1 })
    .commit();
  return res.ok;
}
```

**Avoid**: Reading a KV key and calling `kv.set()` without `kv.atomic().check(entry)` on concurrent counters, or forgetting to keep secondary index keys in sync inside the same atomic commit.

**Source**: [Deno KV — Fireship Deno](https://fireship.dev/c/deno/app-deno-kv), [Atomic Writes — Fireship Deno](https://fireship.dev/c/deno/app-atomic), [deno-course — fireship-io](https://github.com/fireship-io/deno-course)
