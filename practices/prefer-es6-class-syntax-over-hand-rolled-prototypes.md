> Full index: [index-javascript.md](index-javascript.md)

# Prefer ES6 `class` syntax over hand-rolled constructor prototypes

**When to use**: When defining constructable types that share methods across instances.

**Rule**: Prefer `class` with a `constructor` and methods written in the class body over the older pattern of a constructor function plus `Ctor.prototype.method = ...`. Methods declared that way still live on the shared prototype (instances delegate failed lookups there); `constructor` initializes per-instance state; create instances with `new`. This is the readable form of JavaScript's prototype model, not a separate object system. Arrow functions cannot fill this role: they have no `prototype` and throw if you call them with `new`.

**Example**:
```js
class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
}

const a = new Account('Ada', 10);
a.deposit(5);
```

**Avoid**: Recreating shared methods as own-properties inside the constructor, or using an arrow function as a constructor.

**Source**: [Guide to JavaScript's prototype (and ES6 Classes) — Fireship Modern JavaScript](https://fireship.dev/c/modern-javascript/prototype-es6-classes)
