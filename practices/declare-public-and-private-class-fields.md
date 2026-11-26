> Full index: [index-javascript.md](index-javascript.md)

# Declare public class fields and hide state with `#` private fields

**When to use**: When a class has instance or static data that does not need constructor parameters, or when some state must stay hidden from callers.

**Rule**: Declare public instance and `static` fields on the class body (`count = 0`, `static defaults = {}`) instead of assigning them only inside the constructor or hanging them on the constructor function after the class. For values that must not be reachable from outside, use `#` private fields (`#miles = 0`) and read or write them as `this.#miles` inside the class. A leading underscore (`_miles`) is only a convention—it is still a public property. Arrow-function fields close over lexical `this` and can replace constructor `.bind(this)` for methods that are passed as callbacks.

**Example**:
```js
class Car {
  #miles = 0;
  static fleet = [];

  drive(distance) {
    this.#miles += distance;
  }
  getMiles() {
    return this.#miles;
  }
}

const car = new Car();
car.drive(10);
car.getMiles(); // 10
// car.#miles is a SyntaxError outside the class
```

**Avoid**: Treating `_private` names as actually private, or expecting `#field += n` without `this` to work in shipped JavaScript.

**Source**: [Private and Public Class Fields — Fireship Modern JavaScript](https://fireship.dev/c/modern-javascript/private-and-public-class-fields)
