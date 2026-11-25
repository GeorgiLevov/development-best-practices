> Full index: [index-react-patterns.md](index-react-patterns.md)

# Use JSX slot props and component references instead of `React.cloneElement`

**When to use**: When a component needs multiple rich-markup regions beyond `children` or renders caller-supplied icons/widgets with enforced props.

**Rule**: Use **named JSX slot props** (`actions={<CartButton />}`, `media={<picture>...</picture>}`) whenever a component renders rich markup in multiple regions instead of forcing flat strings or awkward wrappers. When the child component must own or lock down props on a caller-chosen component (such as icon `size`, `aria-hidden`, or `className`), pass the **component reference itself** (`icon={Award}` -> `function IconButton({ icon: Icon }) { return <Icon size={20} />; }`) rather than passing pre-built JSX and mutating it with legacy `React.cloneElement`. For open-ended icon sets, let callers import and pass the specific icon component instead of maintaining a giant `ICON_MAP` inside the leaf component that prevents tree-shaking.

**Example**:
```jsx
function IconButton({ icon: Icon, children, ...delegated }) {
  return (
    <button type="button" {...delegated}>
      <Icon size={20} aria-hidden="true" />
      <span>{children}</span>
    </button>
  );
}

// Callers only bundle the icons they import:
import { Award } from 'lucide-react';
<IconButton icon={Award}>Claim badge</IconButton>
```

**Avoid**: Calling `React.cloneElement(iconElement, { size: 20 })` to inject props into JSX elements, or importing 50 icons into `IconButton` via `ICON_MAP[iconName]` when callers only use two.

**Source**: [Slots — Joy of React](https://courses.joshwcomeau.com/joy-of-react/04-component-design/07-slots), [Slots Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/04-component-design/07.01-slots-exercises), [cloneElement — React Docs](https://react.dev/reference/react/cloneElement), [Lucide React — Lucide](https://lucide.dev/guide/packages/lucide-react)
