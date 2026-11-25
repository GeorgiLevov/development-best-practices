> Full index: [index-javascript.md](index-javascript.md)

# Prefer arrow functions for lexical `this` and wrap implicit object returns

**When to use**: When writing short callbacks, or when a function should inherit `this` from the surrounding scope instead of getting its own.

**Rule**: Arrow functions have **lexical** `this` (and no own `arguments`); they close over the `this` of the enclosing function rather than being rebound by how they are called (the lexical step in the [call-site `this` checklist](resolve-this-from-the-call-site-with-call-apply-and-bind.md)). Use them for callbacks that need the outer `this` instead of `.bind(this)` or `const self = this`. When an arrow implicitly returns an object, wrap the literal in parentheses (`() => ({ ok: true })`) so `{` is not parsed as a function body. Do not use arrows as constructors: they have no `prototype`, and `new` on an arrow throws.

**Example**:
```js
class Timer {
  constructor() {
    this.ticks = 0;
  }
  start() {
    this.id = setInterval(() => {
      this.ticks += 1; // lexical this is the Timer instance
    }, 1000);
  }
}

const toPoint = (x, y) => ({ x, y });
```

**Avoid**: Using `function` callbacks that lose `this` and then patching them with `var self = this`, writing `() => { x: 1 }` when you meant to return an object, using `console.log(x) || { ... }` as a clever implicit return, or calling `new` on an arrow function.

**Source**: [Arrow Functions — Fireship Modern JavaScript](https://fireship.dev/c/modern-javascript/arrow-functions), [Understanding the this keyword, call, apply, and bind — Fireship Advanced JavaScript](https://fireship.dev/c/advanced-javascript/this-keyword-call-apply-bind-javascript)
