> Full index: [index-react.md](index-react.md)

# Follow JSX expression, attribute casing, and whitespace rules

**When to use**: When writing or converting HTML markup into JSX inside React components.

**Rule**: Inside JSX `{...}` slots, write JavaScript expressions that evaluate to a value—never statements (`if`, `for`, `switch`). Rename reserved-word HTML attributes (`className`, `htmlFor`) and camelCase multi-word DOM attributes (`tabIndex`, `readOnly`, `maxLength`), leaving `data-*` and `aria-*` hyphenated. Always self-close void elements (`<img />`, `<input />`, `<br />`), remember that passing `undefined` as an attribute omits it from the DOM, and add explicit `{' '}` whitespace when JSX line breaks strip spaces between inline siblings. Wrap a multiline `return` in parentheses so automatic semicolon insertion does not turn `return` into `return;` and yield `undefined`. A boolean JSX attribute with no value (`<Pokemon starter />`) is `true`, not a string and not `undefined`.

**Example**:
```jsx
<label htmlFor="email" className="field-label">
  Email <strong>required</strong>
  {' '}
  <input id="email" type="email" aria-describedby="email-hint" />
</label>
```

**Avoid**: Writing `class=` or `for=` in JSX, leaving `<img>` or `<input>` unclosed, embedding `if`/`for` statements inside `{...}`, assuming newlines between inline tags render a space, or leaving a multiline `return` unwrapped so ASI inserts a semicolon after `return`.

**Source**: [Expression Slots — Joy of React](https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/02.01-expression-slots), [Differences from HTML — Joy of React](https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/02.02-differences-from-HTML), [Whitespace — Joy of React](https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/02.04-whitespace), [Lexical grammar: Reserved words — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words), [JSX — react.gg](https://fireship.dev/c/react/jsx), [Automatic semicolon insertion — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)
