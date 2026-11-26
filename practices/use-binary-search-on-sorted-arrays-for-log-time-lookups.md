> Full index: [index-javascript.md](index-javascript.md)

# Use binary search on sorted arrays for `O(log n)` lookups

**When to use**: When repeatedly searching large, **already sorted** arrays where linear `O(n)` scans are too slow.

**Rule**: On sorted data, halve the search window (`start`..`end`) each step by comparing against `middle = Math.floor((start + end) / 2)` instead of scanning element by element. Return `-1` cleanly when `start > end` (base case). Do not run binary search on unsorted data—either keep the collection sorted or use a `Set`/`Map` for `O(1)` membership/key lookups.

**Example**:
```js
export function binarySearch(sorted, target, start = 0, end = sorted.length - 1) {
  if (start > end) return -1;
  const mid = Math.floor((start + end) / 2);
  if (sorted[mid] === target) return mid;
  return sorted[mid] > target
    ? binarySearch(sorted, target, start, mid - 1)
    : binarySearch(sorted, target, mid + 1, end);
}
```

**Avoid**: Calling binary search on an unsorted array, or forgetting the `start > end` termination guard.

**Source**: [Binary Search — Fireship JavaScript](https://fireship.dev/c/js/algo-binary-search), [javascript-course — fireship-io](https://github.com/fireship-io/javascript-course)
