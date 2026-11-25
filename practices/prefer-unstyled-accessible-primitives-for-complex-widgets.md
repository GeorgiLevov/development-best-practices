> Full index: [index.md](index.md)

# Wrap unstyled accessible primitives for complex interactive widgets

**When to use**: When building dialogs, comboboxes, dropdown menus, tabs, tooltips, or custom select lists.

**Rule**: Adopt an actively maintained unstyled/headless accessible component library (such as Radix Primitives, React Aria, Headless UI, or Ariakit) and supply your own design-system styles rather than hand-coding WAI-ARIA roles, focus management, roving tabindex, and cross-device keyboard behavior from scratch.

**Example**:
```jsx
// Compose unstyled primitive behavior with your own styled wrappers
<Dialog.Root>
  <Dialog.Trigger asChild><PrimaryButton>Edit</PrimaryButton></Dialog.Trigger>
  <Dialog.Portal><StyledDialogContent>...</StyledDialogContent></Dialog.Portal>
</Dialog.Root>
```

**Avoid**: Building custom keyboard-navigable dropdowns or comboboxes from plain `<div>` tags, or adopting unmaintained legacy UI packages.

**Source**: [Component Libraries — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/10-component-libraries), [Radix Primitives](https://www.radix-ui.com/docs/primitives), [React Aria](https://react-spectrum.adobe.com/react-aria/)
