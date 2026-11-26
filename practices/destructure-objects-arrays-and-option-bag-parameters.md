> Full index: [index-javascript.md](index-javascript.md)

# Destructure objects, arrays, and option-bag parameters instead of positional unpacking

**When to use**: When pulling named fields off objects, items out of position-significant arrays, or designing functions with several optional inputs.

**Rule**: Use object destructuring to extract, rename (`{ id: userId }`), default (`{ limit = 20 }`), and collect leftovers (`...rest`) in one binding. Use array destructuring when position is the identifier (`const [year, month] = parts`). For functions with more than a couple of optional or unordered inputs, take a single options object and destructure it in the parameter list so callers can pass only the keys they care about and skip `null` placeholders. Destructuring defaults apply when the property is `undefined` (missing), not when it is another falsy value.

**Example**:
```js
function listRepos({ language, minStars = 0, createdBefore } = {}) {
  return `${language} repos over ${minStars} stars`;
}

const [year, make, model] = csvRow.split(',');
const { url: href, ...rest } = link;
```

**Avoid**: Long positional parameter lists padded with `null`, or defaulting destructured numbers with `value || fallback` (that clobbers `0`).

**Source**: [Object and Array Destructuring — Fireship Modern JavaScript](https://fireship.dev/c/modern-javascript/object-array-destructuring)
