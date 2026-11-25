> Full index: [index.md](index.md)

# Pass nested content through the `children` prop

**When to use**: When designing React components that wrap content, such as buttons, cards, dialogs, or layout shells.

**Rule**: Accept primary content via `children` (written between opening and closing tags, like HTML) instead of a custom `contents`/`label` string prop. This keeps JSX readable, allows rich nested markup (icons, `<strong>`, other components), and reserves named props for true configuration like `icon` or `variant`.

**Example**:
```jsx
function IconButton({ icon, children }) {
  return (
    <button type="button" className="IconButton">
      <Icon icon={icon} />
      {children}
    </button>
  );
}

<IconButton icon="home">Go home</IconButton>;
```

**Avoid**: `<IconButton contents="Go home" />`-style APIs that only accept plain strings and diverge from HTML's nesting model.

**Source**: [Intro to React — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/bonus/02-intro-to-react), [A Complete Beginner's Guide to React — We Learn Code](https://welearncode.com/beginners-guide-react-2020/), [React for Beginners handbook — freeCodeCamp](https://www.freecodecamp.org/news/react-beginner-handbook/)
