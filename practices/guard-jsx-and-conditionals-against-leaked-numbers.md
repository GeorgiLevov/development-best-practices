> Full index: [index-react.md](index-react.md)

# Guard JSX `&&` conditionals with booleans to avoid leaking `0` or `NaN`

**When to use**: When conditionally rendering JSX with `&&`, ternaries, or early returns.

**Rule**: React ignores `false`, `null`, `undefined`, and `''`, but renders numbers (`0` and `NaN`) directly as text nodes. Ensure the left-hand side of any JSX `&&` conditional strictly evaluates to a boolean (`items.length > 0 && ...` or `Boolean(count) && ...` / `!!count && ...`), use a ternary (`cond ? <A /> : <B />` or `: null`) when rendering an alternate branch inside JSX, and use early `if` returns above `return (...)` for large branch splits. Enable `react/jsx-no-leaked-render` where ESLint is used.

**Example**:
```jsx
function InboxBadge({ unreadCount, items }) {
  if (items.length === 0) {
    return <p>All caught up.</p>;
  }

  return (
    <>
      {unreadCount > 0 && <span>{unreadCount} unread</span>}
      <MessageList items={items} />
    </>
  );
}
```

**Avoid**: Writing `{items.length && <MessageList />}` or `{unreadCount && <span>...</span>}`, which renders a stray `0` in the UI when the value is zero.

**Source**: [With `if/else` — Joy of React](https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/07.01-if-else), [With `&&` — Joy of React](https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/07.02-and-and), [With Ternary — Joy of React](https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/07.03-ternary), [jsx-no-leaked-render — eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md), [JSX — react.gg](https://fireship.dev/c/react/jsx)
