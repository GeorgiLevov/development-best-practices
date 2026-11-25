> Full index: [index.md](index.md)

# Update immutable editor state via transactions

**When to use**: When building or extending browser code editors using CodeMirror 6.

**Rule**: Treat `EditorState` as an immutable persistent data structure. Apply document, selection, or extension updates by creating transactions (`state.update(...)`), never by mutating state properties directly.

**Example**:
```js
const transaction = view.state.update({
  changes: { from: 0, insert: "/* updated */\n" },
});
view.dispatch(transaction);
```

**Avoid**: Mutating editor state objects directly, which breaks extension synchronization and undo history.

**Source**: [CodeMirror Reference Manual](https://codemirror.net/docs/ref/#commands)
