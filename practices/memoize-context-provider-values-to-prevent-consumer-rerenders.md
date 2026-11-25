> Full index: [index-react-patterns.md](index-react-patterns.md)

# Memoize Context Provider `value` objects and split volatile state from actions

**When to use**: Whenever a Context Provider passes an object or callbacks down to multiple consumers across the tree.

**Rule**: Remember that `React.memo` on a child component does **not** prevent re-renders when a Context it subscribes to emits a new `value` reference. Passing an inline object literal (`value={{ user, logOut }}`) creates a fresh object every time the Provider renders, forcing every consumer—even pure memoized ones—to re-render. Always wrap non-primitive Context values in `React.useMemo`, stabilize exposed callbacks with `React.useCallback` and functional `setState(prev => ...)` updaters, and—for frequently changing state—split volatile state and stable action/dispatch functions into separate Contexts so action-only consumers never re-render when state updates.

**Example**:
```jsx
function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);

  const logOut = React.useCallback(() => setUser(null), []);
  const value = React.useMemo(() => ({ user, logOut }), [user, logOut]);

  return <AuthContext value={value}>{children}</AuthContext>;
}
```

**Avoid**: Writing `<UserContext.Provider value={{ user, setUser }}>` inline inside a parent that holds unrelated local state, or assuming `React.memo(Consumer)` blocks re-renders triggered by an un-memoized Context `value`.

**Source**: [Context Performance — Joy of React](https://courses.joshwcomeau.com/joy-of-react/04-component-design/08.06-context-performance), [useContext — React Docs](https://react.dev/reference/react/useContext#optimizing-re-renders-when-passing-objects-and-functions)
