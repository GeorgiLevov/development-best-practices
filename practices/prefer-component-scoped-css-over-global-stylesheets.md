> Full index: [index.md](index.md)

# Prefer component-scoped styling over global stylesheets

**When to use**: When choosing or structuring CSS architecture in a component-driven frontend app.

**Rule**: Default to a styling tool that scopes rules to components automatically—such as CSS Modules, Tailwind utility classes, Vue/Svelte `<style scoped>`, or CSS-in-JS—rather than relying purely on global `.css` sheets and manual BEM naming discipline, so refactoring or deleting a component removes its styles safely without naming collisions.

**Example**:
```jsx
import styles from './Card.module.css';

export function Card({ children }) {
  return <article className={styles.wrapper}>{children}</article>;
}
```

**Avoid**: Authoring unscoped global `.wrapper` or `.title` rules across a growing multi-author codebase.

**Source**: [Ecosystem World Tour — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/02-ecosystem-world-tour), [PostCSS](https://postcss.org/)
