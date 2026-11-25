> Full index: [index-react-patterns.md](index-react-patterns.md)

# Try composition before Context, then encapsulate Context inside a `*Provider` component

**When to use**: When avoiding prop drilling across multiple intermediate components or sharing cross-tree app state (auth, theme, toasts).

**Rule**: Do not reach for Context automatically: pass props directly across 1–2 layers (even if a Context exists) and check whether **lifting content up** via `children` or named JSX slots removes the prop drilling with simpler, more reusable components. When many distant or deeply nested components genuinely need shared data, encapsulate `createContext`, the state hook, and semantic action callbacks (`createToast`, `dismissToast`, `logOut`—never raw `setState`) inside a dedicated `*Provider` component (paired with an optional `use*()` consumer hook that guards against missing providers). In React 19+, render `<MyContext value={...}>` directly without `.Provider`, and use `React.use(MyContext)` when you need conditional context reads (never inside `try/catch`).

**Example**:
```jsx
export const ToastContext = React.createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = React.useCallback((message, variant = 'notice') => {
    setToasts((prev) => [...prev, { id: crypto.randomUUID(), message, variant }]);
  }, []);

  const dismissToast = React.useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const value = React.useMemo(
    () => ({ toasts, createToast, dismissToast }),
    [toasts, createToast, dismissToast]
  );

  return <ToastContext value={value}>{children}</ToastContext>;
}
```

**Avoid**: Reaching for Context just to skip passing a prop one level down, dumping raw `setToasts` into Context, forgetting that `children` / slot composition often solves prop drilling without Context, or treating Context as a state manager instead of a way to transport values already held in a provider component's state. `useContext` returns the nearest matching Provider's `value`, or the default passed to `createContext` when no Provider is above the caller.

**Source**: [Context — Joy of React](https://courses.joshwcomeau.com/joy-of-react/04-component-design/08-context), [Provider Components — Joy of React](https://courses.joshwcomeau.com/joy-of-react/04-component-design/08.04-provider-component), [Lifting Content Up — Joy of React](https://courses.joshwcomeau.com/joy-of-react/05-happy-practices/04-lifting-content-up), [Before You Use Context — React Docs](https://react.dev/learn/passing-data-deeply-with-context#before-you-use-context), [use — React Docs](https://react.dev/reference/react/use), [Context — react.gg](https://fireship.dev/c/react/context)
