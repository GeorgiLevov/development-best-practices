> Full index: [index-javascript.md](index-javascript.md)

# Write object literals with shorthand properties and computed keys

**When to use**: When building an object whose property names match existing variables, whose methods belong on the literal, or whose keys are computed at runtime.

**Rule**: If a property name matches a variable in scope, write the name once (`{ id, title }` instead of `{ id: id, title: title }`). Declare methods with concise syntax (`save() {}`) instead of `save: function () {}`. When the key itself is an expression, put it in the literal with computed property names (`{ [key]: value }`) rather than creating the object and assigning `obj[key] = value` afterward.

**Example**:
```js
const id = 'u1';
const field = 'role';

const user = {
  id,
  [field]: 'admin',
  save() {
    return this.id;
  },
};
```

**Avoid**: Repeating `name: name` in literals, writing `method: function () {}` without need, or building an empty object only to assign a dynamic key on the next line.

**Source**: [Shorthand Properties and Method Names — Fireship Modern JavaScript](https://fireship.dev/c/modern-javascript/shorthand-properties), [Computed Property Names — Fireship Modern JavaScript](https://fireship.dev/c/modern-javascript/computed-property-names)
