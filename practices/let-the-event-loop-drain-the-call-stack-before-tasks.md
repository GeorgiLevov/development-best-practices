> Full index: [index-javascript.md](index-javascript.md)

# Let the event loop drain the call stack before tasks, and run promise jobs first

**When to use**: When reasoning about the order of `console.log`, `setTimeout`, promise `.then`, or other delayed callbacks, including `setTimeout(fn, 0)`.

**Rule**: JavaScript is **single-threaded**: only one frame runs at a time on the **call stack**. Browser/Node Web APIs (`setTimeout`, XHR/fetch) do the waiting off the stack; when they finish they enqueue a callback on the **task queue** (macrotasks). The **event loop** moves a task onto the stack only after the stack is empty, so `setTimeout(fn, 0)` still runs *after* the current turn finishes. Promise reactions go on a higher-priority **job queue** (microtasks). The loop clears the job queue before it takes the next task—so a `Promise.then` scheduled in the same turn runs before a `setTimeout(..., 0)` that was registered earlier. For writing the async code itself, see [Prefer `async`/`await` and `try`/`catch` over nested callbacks](prefer-async-await-and-try-catch-over-nested-callbacks.md).

**Example**:
```js
console.log('First');
setTimeout(() => console.log('Second'), 0);
Promise.resolve('Third').then(console.log);
console.log('Fourth');
// logs: First, Fourth, Third, Second
```

**Avoid**: Assuming `setTimeout(fn, 0)` runs before the rest of the current call stack, or that a timeout registered before a `.then` will always fire first.

**Source**: [The JavaScript Event Loop - A Simple Guide — Fireship Advanced JavaScript](https://fireship.dev/c/advanced-javascript/the-javascript-event-loop-a-simple-guide)
