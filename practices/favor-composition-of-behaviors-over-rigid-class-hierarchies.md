> Full index: [index-javascript.md](index-javascript.md)

# Favor composition of behaviors over rigid class hierarchies

**When to use**: When you are tempted to grow an `extends` tree so that types can share some behaviors, especially once a new type needs only a subset (or a new mix) of those behaviors.

**Rule**: Prefer to describe objects by **what they do** (eat, sleep, notify) rather than a brittle **is-a** taxonomy. Extract each behavior as a small function that receives the instance state and returns methods, then merge them with `Object.assign` (or an equivalent mixin) onto a plain object or `this`. Adding or mixing behaviors then does not require refactoring a parent class that every subtype is tied to. Keep `extends` / the prototype chain for genuine specialization ([Wire inheritance through the prototype chain with `extends` and `super`](wire-inheritance-through-the-prototype-chain-with-extends-and-super.md)); switch to composition when the hierarchy is only there to reuse a grab-bag of methods.

**Example**:
```js
const eater = (state) => ({
  eat(n) {
    state.energy += n;
  },
});
const notifier = (state) => ({
  notify(msg) {
    state.inbox.push(msg);
  },
});

function createUser(name) {
  const state = { name, energy: 10, inbox: [] };
  return Object.assign(state, eater(state), notifier(state));
}
```

**Avoid**: Deepening an inheritance tree just to share unrelated methods, or forcing an unrelated type into a parent class because it happens to need one of the parent's behaviors.

**Source**: [(Bonus) JavaScript Composition vs Inheritance — Fireship Advanced JavaScript](https://fireship.dev/c/advanced-javascript/javascript-inheritance-vs-composition)
