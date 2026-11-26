> Full index: [index-javascript.md](index-javascript.md)

# Reason about execution contexts, the scope chain, and closures

**When to use**: When tracing where a variable is visible, why a value looks "hoisted," or how an inner function still sees a parent's bindings after that parent has returned.

**Rule**: The engine runs your program as a stack of **execution contexts**. The global context starts with a global object (`window` in the browser, `global` in Node) and a `this` that points at it. Each context has a **creation** phase (hoist `var` as `undefined`, place function declarations in memory, create `this`) and an **execution** phase (run the code). A function call pushes a new context with its own variable environment; when it returns, that context is popped and its local bindings disappear. Lookups walk the **scope chain**: current context, then each parent, then global—and throw `ReferenceError` if nothing has the name. A nested function **closes over** its parent's variable environment, so those bindings stay reachable after the parent context is gone. Never create a binding without `var`/`let`/`const`; an assignment with no declaration becomes a property on the global object. For `let`/`const` block scope and the temporal dead zone, see [Prefer `const` and `let` over function-scoped `var`, and respect the temporal dead zone](prefer-const-and-let-over-function-scoped-var.md).

**Example**:
```js
function makeAdder(x) {
  return function add(y) {
    return x + y; // `x` is still visible after makeAdder returns
  };
}
const addTen = makeAdder(10);
addTen(5); // 15
```

**Avoid**: Reading a `var` before its assignment and treating the hoisted `undefined` as meaningful, or assigning to an undeclared name (`leaked = 1`) and polluting the global object.

**Source**: [Guide to Execution Contexts, Hoisting, Scopes, and Closures — Fireship Advanced JavaScript](https://fireship.dev/c/advanced-javascript/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript)
