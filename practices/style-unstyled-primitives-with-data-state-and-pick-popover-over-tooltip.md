> Full index: [index-ui-engineering.md](index-ui-engineering.md)

# Style unstyled primitives via `data-state` attributes and prefer Popovers over Tooltips for rich help

**When to use**: When styling or choosing between Radix, React Aria, or Headless UI primitives like Accordion, Tooltip, HoverCard, and Popover.

**Rule**: Style stateful unstyled primitives using the `data-state` (`"open"` / `"closed"`), `data-side`, and `data-align` attributes they expose rather than duplicating state flags in JS class names. Always render floating content inside the primitive's `Portal` (`<Tooltip.Portal>`, `<Popover.Portal>`) to escape clipping ancestors, and never place block `<div>` structures inside `<p>` triggers (which violates HTML nesting and triggers hydration/DOM errors). Reserve **Tooltips** strictly for brief plain-text labels on existing interactive buttons, and avoid mouse-only `HoverCard` for essential content; choose **Popover** (click/keyboard-activated, focus-managed, and screen-reader accessible) whenever users need to read or interact with supplemental explanations such as asterisk/info callouts.

**Example**:
```css
/* Style Radix / headless trigger state directly via data-state */
.accordion-trigger[data-state="open"] .chevron {
  transform: rotate(180deg);
}
```
```jsx
// Prefer Popover over Tooltip for non-button info/asterisk callouts
<Popover.Root>
  <Popover.Trigger asChild>
    <button type="button" aria-label="More details">*</button>
  </Popover.Trigger>
  <Popover.Portal>
    <Popover.Content sideOffset={6}>Pricing excludes local tax.</Popover.Content>
  </Popover.Portal>
</Popover.Root>
```

**Avoid**: Attaching `<Tooltip>` around non-interactive `<span>` text, nesting `<Tooltip.Content>` inside a `<p>` without `.Portal`, or using a hover-only preview for critical UI explanations.

**Source**: [Library Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/04-component-design/10.02-library-exercises), [Styling — Radix Primitives](https://www.radix-ui.com/docs/primitives/guides/styling), [Tooltip — Radix Primitives](https://www.radix-ui.com/docs/primitives/components/tooltip), [Popover — Radix Primitives](https://www.radix-ui.com/docs/primitives/components/popover), [HoverCard Keyboard Support — Radix Issue #898](https://github.com/radix-ui/primitives/issues/898)
