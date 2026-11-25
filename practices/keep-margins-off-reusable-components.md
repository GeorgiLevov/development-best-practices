> Full index: [index.md](index.md)

# Keep external margins off reusable UI components

**When to use**: When designing reusable buttons, cards, badges, inputs, or widgets in an app or design system.

**Rule**: Encapsulate internal padding and structure inside reusable components, and let parent layouts own external spacing between siblings via Flexbox/Grid `gap` or dedicated `Stack`/Spacer layout components rather than baking outer `margin` into the child.

**Example**:
```jsx
<Stack space="medium">
  <CardHeader />
  <CardBody />
  <ActionButton>Save</ActionButton>
</Stack>
```

**Avoid**: Hardcoding `margin-bottom: 16px` inside `<ActionButton>` or `<Badge>`, forcing every new caller to fight or negate baked-in outer spacing.

**Source**: [Margin Considered Harmful — Max Stoiber](https://mxstbr.com/thoughts/margin/), [Stack — Braid Design System](https://seek-oss.github.io/braid-design-system/components/Stack), [Layout Best Practices — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/01-rendering-logic-1/14-best-practices)
