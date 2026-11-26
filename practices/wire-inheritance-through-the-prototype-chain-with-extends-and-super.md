> Full index: [index-javascript.md](index-javascript.md)

# Wire inheritance through the prototype chain with `extends` and `super`

**When to use**: When one constructable type should reuse another type's methods and initialization via JavaScript's prototype chain.

**Rule**: Failed property lookups walk the prototype chain (instance → constructor `.prototype` → parent `.prototype` → `Object.prototype`). In older code that is `Parent.call(this, ...)` inside the child constructor, then `Child.prototype = Object.create(Parent.prototype)` and restore `Child.prototype.constructor = Child`. Prefer the ES6 form: `class Child extends Parent` and call `super(...)` before using `this` in the child constructor—that is the same pattern without manual `.call` / `Object.create` / constructor reset. For the basic `class` / `constructor` / `new` shape without a parent, see [Prefer ES6 `class` syntax over hand-rolled constructor prototypes](prefer-es6-class-syntax-over-hand-rolled-prototypes.md). When a hierarchy starts to get awkward, prefer composition ([Favor composition of behaviors over rigid class hierarchies](favor-composition-of-behaviors-over-rigid-class-hierarchies.md)).

**Example**:
```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}
```

**Avoid**: Assigning `Child.prototype = Parent.prototype` (instances then share and mutate one object), forgetting to reset `.constructor` after `Object.create`, or using `this` in a subclass constructor before `super(...)`.

**Source**: [JavaScript Inheritance and the Prototype Chain — Fireship Advanced JavaScript](https://fireship.dev/c/advanced-javascript/javascript-inheritance-and-the-prototype-chain)
