> Full index: [index.md](index.md)

# Pad leading-icon inputs inside a `<label>` wrapper and forward `id` on custom selects

**When to use**: When building custom `IconInput` or `Select` form components in a UI library.

**Rule**: For leading-icon inputs, make `<label>` the `position: relative` wrapper containing `<VisuallyHidden>{label}</VisuallyHidden>`, an absolutely centered `<IconWrapper>` (`top: 0; bottom: 0; margin: auto 0;`), and `<TextInput {...delegated}>` with `padding-left` matching the icon/control height so typed text never collides with the icon (keep placeholder weight lighter than bold input text). On custom `<Select>` wrappers, forward `id` to the underlying `<select id={id}>` so external `<label htmlFor={id}>` bindings work, and throw early if a size/variant lookup misses.

**Example**:
```jsx
const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];
  if (!styles) throw new Error(`Unknown size: ${size}`);
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput
        {...delegated}
        style={{ '--width': width + 'px', '--height': styles.height / 16 + 'rem' }}
      />
    </Wrapper>
  );
};
// TextInput has `padding-left: var(--height); font-weight: 700;`
```

**Avoid**: Typing text directly underneath an absolutely positioned icon, dropping the `id` prop on wrapped `<select>` elements, or silently rendering `undefined` styles for an invalid `size` prop.

**Source**: [mini-component-library — CSS for JavaScript Developers](https://github.com/css-for-js/mini-component-library)
