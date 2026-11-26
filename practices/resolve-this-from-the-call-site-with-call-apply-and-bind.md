> Full index: [index-javascript.md](index-javascript.md)

# Resolve `this` from the call site with `call`, `apply`, and `bind`

**When to use**: When a function uses `this` and you need to predict or control which object it refers to.

**Rule**: `this` is decided by **how the function is invoked**, not where it was defined. Work through the call site in this order: (1) **Implicit**—if the call is `obj.method()`, `this` is `obj` (look to the left of the dot). (2) **Explicit**—`.call(ctx, ...args)` and `.apply(ctx, argsArray)` invoke immediately with `this` set to `ctx`; `.bind(ctx, ...args)` returns a new function with `this` (and any leading arguments) fixed for later. (3) **`new`**—the constructor's `this` is the newly created instance. (4) **Lexical**—an arrow function has no own `this`; it uses the enclosing scope (see [Prefer arrow functions for lexical `this` and wrap implicit object returns](prefer-arrow-functions-for-lexical-this.md)). (5) If none of the above apply, `this` is `undefined` in strict mode and the global object otherwise. Prefer `.call`/`.apply`/`.bind` or arrows over `var self = this`.

**Example**:
```js
function greet(lang) {
  return `${this.name} knows ${lang}`;
}
const user = { name: 'Ada' };

greet.call(user, 'JS');          // immediate, args listed
greet.apply(user, ['JS']);       // immediate, args as an array
const later = greet.bind(user, 'JS');
later();                         // "Ada knows JS"
```

**Avoid**: Reading a function body to guess `this` without looking at the invocation, or relying on the default global `this` (it becomes `undefined` under `"use strict"`).

**Source**: [Understanding the this keyword, call, apply, and bind — Fireship Advanced JavaScript](https://fireship.dev/c/advanced-javascript/this-keyword-call-apply-bind-javascript)
