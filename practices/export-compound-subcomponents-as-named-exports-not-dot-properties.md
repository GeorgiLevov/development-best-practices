> Full index: [index-react-patterns.md](index-react-patterns.md)

# Export compound sub-components as named exports instead of dot properties

**When to use**: When building multi-part components like `<Accordion>`, `<Dropdown>`, `<Tabs>`, or `<Card>` with collaborating sub-elements.

**Rule**: Choose **closed data-driven APIs** (`<Accordion items={data} />`) when structure is uniform and callers only supply data, and **composable compound components** (`<AccordionRoot>`, `<AccordionItem>`, `<AccordionTrigger>`) when callers need flexible markup, custom ordering, or per-part props. Always export compound parts as **named exports** (consumed directly or via `import * as Accordion from './Accordion'`) rather than attaching sub-components as properties on a function (`Accordion.Item = AccordionItem`). Property attachment defeats bundler tree-shaking and breaks React Server Components across `"use client"` boundaries.

**Example**:
```jsx
// Accordion.js — named exports (tree-shakeable & RSC-safe)
export function AccordionRoot({ children }) { /* ... */ }
export function AccordionItem({ value, children }) { /* ... */ }
export function AccordionTrigger({ children }) { /* ... */ }

// Consumer usage with namespace import or direct named imports:
import * as Accordion from './Accordion';
<Accordion.Root>
  <Accordion.Item value="faq-1">...</Accordion.Item>
</Accordion.Root>
```

**Avoid**: Writing `Dropdown.Item = DropdownItem; export default Dropdown;`—especially in Next.js App Router / RSC apps where accessing dot properties on Client Component references throws `Unsupported Server Component type: undefined`.

**Source**: [Compound Components — Joy of React](https://courses.joshwcomeau.com/joy-of-react/04-component-design/06-compound-components), [Radix Primitives Introduction — Radix UI](https://www.radix-ui.com/docs/primitives/overview/introduction)
