> Full index: [index-react.md](index-react.md)

# Compose conditional `className` strings safely without passing `false`

**When to use**: Whenever toggling CSS classes conditionally or merging base, variant, and caller-supplied `className` props in React.

**Rule**: Never pass a short-circuit `condition && styles.active` expression directly to `className` or interpolate it into a template literal—when falsy, it evaluates to the boolean `false` (triggering React attribute warnings or rendering the literal `"false"` class). For a single conditional class, return `undefined` (on the `className` prop) or `''` (inside template strings) with a ternary (`isActive ? styles.active : undefined`). For multiple conditional classes or forwarding an optional `className` prop, compose them with a tiny helper like `clsx`, which ignores falsy values cleanly.

**Example**:
```jsx
import clsx from 'clsx';
import styles from './Button.module.css';

function Button({ variant = 'primary', isSelected, className, children }) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        isSelected && styles.selected,
        className
      )}
    >
      {children}
    </button>
  );
}
```

**Avoid**: Writing `className={isSelected && styles.selected}` or ``className={`${styles.button} ${isSelected && styles.selected}`}``.

**Source**: [Styling Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/09.02-styling-exercises), [clsx — npm](https://www.npmjs.com/package/clsx)
