> Full index: [index-react.md](index-react.md)

# Bind React events with camelCased props and function references

**When to use**: When wiring user interactions (`click`, `change`, `keydown`, `submit`) inside React components.

**Rule**: Attach handlers through React's camelCased `onX` props (`onClick`, `onChange`, `onKeyDown`) rather than querying DOM nodes with `querySelector` + `addEventListener` (reserve manual listeners for `window`/`document` events). React cleans up `onX` listeners automatically, delegates events efficiently, and normalizes cross-browser differences through `SyntheticEvent` (access `event.nativeEvent` if the underlying DOM event is needed). Pass a function reference (`onClick={save}`), never an invocation (`onClick={save()}`), and wrap calls needing arguments in an inline arrow (`() => setTheme('dark')`). When a shared handler takes an optional parameter, pass explicit arguments on *every* caller (`() => handleResult('win')` and `() => handleResult('lose')`) rather than mixing a bare reference (`onClick={handleResult}`), which leaks `SyntheticEvent` into the first parameter.

**Example**:
```jsx
<button type="button" onClick={() => handleResult('win')}>
  Win
</button>
<button type="button" onClick={() => handleResult('lose')}>
  Lose
</button>
```

**Avoid**: Calling handlers during render (`onClick={setTheme('dark')}`), mixing `onClick={handler}` with `onClick={() => handler('x')}` on a parameterized handler, using lowercase `onclick`, or reaching out of React with `document.querySelector(...).addEventListener(...)` for component elements.

**Source**: [Event Handlers — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/02-event-handlers), [Specifying Arguments — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/02.01-args), [Event Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/02.02-event-exercises), [Data Binding — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/04.01-data-binding), [React Event Object — React Docs](https://react.dev/reference/react-dom/components/common#react-event-object)
