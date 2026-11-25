> Full index: [index-react-patterns.md](index-react-patterns.md)

# Use `key`s and render-tree position to reset or preserve component state intentionally

**When to use**: When resetting a child form/widget on entity switch, replaying CSS keyframe animations on state changes, or debugging unexpected state resets.

**Rule**: React binds component state to **element type + position in the render tree + `key`**. Pass a changing `key` (even on a non-list element, such as `<Chat key={recipientId} />` or `<span key={count} className="pop">`) whenever you want React to unmount the old instance and mount a fresh one—resetting uncontrolled state or restarting CSS `@keyframes` animations cleanly without `useEffect` reset logic. Conversely, keep the same component type at the same tree position (`{isFancy ? <Counter color="gold" /> : <Counter />}`) when state should survive prop changes, and assign distinct `key`s if two branches should stay isolated. Never declare a component function inside another component's render body, which creates a new component type on every render and wipes child state.

**Example**:
```jsx
// Reset Chat state cleanly on recipient change without useEffect:
<ChatPane key={selectedUser.id} recipient={selectedUser} />

// Retrigger CSS keyframe pop animation whenever cart count changes:
<span key={numOfItems} className="cart-badge">
  {numOfItems}
</span>
```

**Avoid**: Writing `useEffect` hooks to manually reset five child `useState` values when a `userId` prop changes, or defining `function InnerRow() {}` inside a parent component's render function.

**Source**: [Leveraging Keys — Joy of React](https://courses.joshwcomeau.com/joy-of-react/05-happy-practices/01-leveraging-keys), [Elements & Tree Position — Joy of React](https://courses.joshwcomeau.com/joy-of-react/05-happy-practices/02-elements), [Preserving and Resetting State — React Docs](https://react.dev/learn/preserving-and-resetting-state), [Resetting All State When a Prop Changes — React Docs](https://react.dev/learn/you-might-not-need-an-effect#resetting-all-state-when-a-prop-changes)
