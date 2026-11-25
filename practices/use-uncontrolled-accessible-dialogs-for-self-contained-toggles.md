> Full index: [index.md](index.md)

# Prefer uncontrolled accessible dialogs for self-contained trigger/close drawers

**When to use**: When building navigation drawers, menus, or modals opened and closed solely by their trigger, dismiss button, backdrop click, or Escape.

**Rule**: When no external action (like form submission) needs to open or close the modal programmatically, use an uncontrolled primitive (`Dialog.Root` wrapping `Dialog.Trigger asChild` and `Dialog.Close asChild`) instead of maintaining manual `isOpen` `useState` plumbing. Always include `Dialog.Title` and `Dialog.Description` (inside `<VisuallyHidden>` if visually omitted) so screen readers announce the dialog cleanly.

**Example**:
```jsx
<Dialog.Root>
  <Dialog.Trigger asChild>
    <UnstyledButton>
      <Icon id="menu" />
      <VisuallyHidden>Open menu</VisuallyHidden>
    </UnstyledButton>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Overlay />
    <Content>
      <Dialog.Close asChild>
        <CloseButton><VisuallyHidden>Dismiss menu</VisuallyHidden></CloseButton>
      </Dialog.Close>
      <VisuallyHidden>
        <Dialog.Title>Mobile navigation</Dialog.Title>
        <Dialog.Description>Site sections and links</Dialog.Description>
      </VisuallyHidden>
      {children}
    </Content>
  </Dialog.Portal>
</Dialog.Root>
```

**Avoid**: Duplicating open/close state in React when `Trigger`/`Close` handles it out of the box, or omitting `Dialog.Title`/`Description` (triggering accessibility warnings).

**Source**: [sole-and-ankle-revisited-v2 (Exercise 4: Mobile menu) — CSS for JavaScript Developers](https://github.com/css-for-js/sole-and-ankle-revisited-v2)
