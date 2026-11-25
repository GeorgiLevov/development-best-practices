> Full index: [index-react.md](index-react.md)

# Pair `minLength` with `pattern` on controlled React inputs that transform text

**When to use**: When using native HTML form validation (`minLength`, `maxLength`, `required`) on a controlled React `<input>` whose `onChange` normalizes text (such as `.toUpperCase()` or trimming).

**Rule**: Browsers only enforce HTML `minLength` when the input's internal "dirty value" flag reflects direct user typing; setting `value={...}` programmatically after a transform like `e.target.value.toUpperCase()` clears that dirty flag and causes `minLength` to pass silently on short inputs. Always pair `minLength` with an explicit `pattern` regex (and a clear `title` message explaining the constraint) plus `maxLength` so native form submission validates controlled transformed values reliably.

**Example**:
```jsx
<input
  type="text"
  required
  minLength={5}
  maxLength={5}
  pattern="[a-zA-Z]{5}"
  title="5-letter word"
  value={guess}
  onChange={(e) => setGuess(e.target.value.toUpperCase())}
/>
```

**Avoid**: Relying on `minLength={5}` alone on controlled inputs that reformat `event.target.value` on every keystroke.

**Source**: [Wordle Submission & Validation — Joy of React](https://courses.joshwcomeau.com/joy-of-react/project-wordle/05-submit), [Wordle Solution Commit 93aad44f — GitHub](https://github.com/joy-of-react/project-wordle/commit/93aad44f), [HTML Constraint Validation — MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation)
