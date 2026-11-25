> Full index: [index-javascript.md](index-javascript.md)

# Implement `O(1)` LRU caches using JavaScript `Map` insertion order

**When to use**: When bounding an in-memory cache by capacity and evicting the least recently used entry in constant average time.

**Rule**: Leverage JavaScript `Map`'s guaranteed insertion-order iteration (`map.keys().next().value` yields the oldest key) instead of building a separate doubly-linked list when a pure-JS `O(1)` LRU cache is needed. On `get(key)`, delete and re-insert an existing entry to move it to most-recent (watch out for falsy values like `0`—check `map.has(key)` rather than `if (item)`!). On `put(key, value)`, delete if present, otherwise evict `map.keys().next().value` when `map.size === capacity`, then `map.set(key, value)`.

**Example**:
```js
export class LRUCache {
  #capacity;
  #map = new Map();
  constructor(capacity) { this.#capacity = capacity; }

  get(key) {
    if (!this.#map.has(key)) return undefined;
    const val = this.#map.get(key);
    this.#map.delete(key);
    this.#map.set(key, val);
    return val;
  }

  put(key, val) {
    if (this.#map.has(key)) this.#map.delete(key);
    else if (this.#map.size >= this.#capacity) {
      this.#map.delete(this.#map.keys().next().value);
    }
    this.#map.set(key, val);
  }
}
```

**Avoid**: Checking `if (item)` on cache hits (which fails to refresh falsy cached values like `0`, `false`, or `''`), or scanning an array on every eviction (`O(n)`).

**Source**: [Least Recently Used (LRU) Cache — Fireship JavaScript](https://fireship.dev/c/js/algo-lru), [javascript-course — fireship-io](https://github.com/fireship-io/javascript-course)
