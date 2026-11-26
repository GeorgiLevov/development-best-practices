> Full index: [index-javascript.md](index-javascript.md)

# Prefer `async`/`await` and `try`/`catch` over nested callbacks

**When to use**: When sequencing asynchronous work, wrapping a callback-style API, or handling success and failure for a promise.

**Rule**: Nested callbacks are hard to read as a sequence and invert control: you hand your continuation to another API and hope it is called once, with the right arguments. Prefer promises (`pending`, `fulfilled`, or `rejected`) and listen with `.then` / `.catch`, or—better for dependent steps—mark the function `async` and `await` each result in order so the code reads top to bottom. Every `async` function returns a promise (a returned value is wrapped). `await` is only legal inside an `async` function or at the top level of an ES module. Handle rejections with `try`/`catch` around the `await`s rather than dropping error paths when you convert `.catch` code.

**Example**:
```js
async function showProfile(id) {
  try {
    const user = await fetchUser(id);
    const weather = await fetchWeather(user.city);
    return { user, weather };
  } catch (err) {
    report(err);
  }
}
```

**Avoid**: Deeply nested success/error callbacks for sequential work, using `await` inside a non-`async` function, or converting a `.catch` chain to `async`/`await` without a `try`/`catch`.

**Source**: [Callbacks, Promises, Async/Await — Fireship Modern JavaScript](https://fireship.dev/c/modern-javascript/callbacks-promises-async-await)
