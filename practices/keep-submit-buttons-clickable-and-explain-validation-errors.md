> Full index: [index-ui-engineering.md](index-ui-engineering.md)

# Keep submit buttons clickable and explain validation errors

**When to use**: When designing form validation and submit-button states.

**Rule**: Prefer keeping form submit buttons clickable rather than setting `disabled` until every field looks valid. Disabled buttons offer zero explanation for why submission is blocked and confuse keyboard and screen-reader users; instead, let users click Submit and surface clear, actionable error messages (via native HTML constraint validation or custom inline validation feedback) explaining what needs to be fixed.

**Example**:
```jsx
<form onSubmit={handleSubmit}>
  <label htmlFor="agree">
    <input id="agree" type="checkbox" checked={agreed} onChange={...} />
    Agree to terms
  </label>
  {error && <p role="alert">{error}</p>}
  <button type="submit">Confirm</button>
</form>
```

**Avoid**: Disabling the Submit button silently (`disabled={!isValid}`) without visible guidance on which field failed or is missing.

**Source**: [Props Vs. State — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/05-props-vs-state), [Client-side form validation — MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
