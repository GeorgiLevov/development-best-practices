> Full index: [index-ui-engineering.md](index-ui-engineering.md)

# Scope `layoutId` with `useId()`, keep keys matched, and manage `zIndex` in shared layout transitions

**When to use**: When animating active tab pills, hover highlights, expanding cards, or reordered lists across elements with Motion's `layoutId`.

**Rule**: Pair `layoutId` with a matching `key` and keep `layoutId` strictly truthy (`layoutId={0}` or `''` fails to animate). In reusable components, namespace `layoutId` with `React.useId()` (e.g., ``layoutId={`${id}-pill`}``) or wrap each instance in `<LayoutGroup>` so multiple tab bars or navs on the same page never morph across each other. Adjust `zIndex` (`position: relative; z-index: 1` on foreground labels, `z-index: 2` on hovered items) so sliding backdrops stay beneath text and active items stay on top; add `layoutRoot` on fixed/sticky containers so measurements stay aligned; and use `unshift` vs `push` deliberately for directional list animations on non-fungible items.

**Example**:
```jsx
function TabList({ tabs, activeTab, onSelect }) {
  const id = React.useId();
  return (
    <ul>
      {tabs.map((tab) => (
        <li key={tab.id} style={{ position: 'relative' }}>
          {activeTab === tab.id && (
            <motion.div layoutId={`${id}-backdrop`} className="pill" />
          )}
          <button style={{ position: 'relative', zIndex: 1 }} onClick={() => onSelect(tab.id)}>
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
```

**Avoid**: Hardcoding unscoped `layoutId="pill"` inside reusable components, passing `0` or `''` as a `layoutId`, or leaving `zIndex` unconfigured so sliding highlights obscure text or clip behind siblings.

**Source**: [Shared Layout Animations — Joy of React](https://courses.joshwcomeau.com/joy-of-react/07-framer-motion/04-shared-layout-animations), [Shared Layout Gotchas — Joy of React](https://courses.joshwcomeau.com/joy-of-react/07-framer-motion/04.01-shared-layout-gotchas), [Shared Layout Animations — Motion Docs](https://motion.dev/docs/react-layout-animations#shared-layout-animations)
