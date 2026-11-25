> Full index: [index-react.md](index-react.md)

# Mount React apps with `createRoot` and a single `<App />` shell

**When to use**: When bootstrapping a React application or organizing top-level component modules.

**Rule**: Mount a single root `<App />` component into one DOM container using `createRoot(container).render(<App />)` from `react-dom/client` (not the removed React 17 `ReactDOM.render` API). Keep the entry file minimal—mounting `<App />` and loading global reset/base styles—while keeping `App` as the top-level shell and placing each reusable component in its own module. Remember that JSX like `<Counter />` only creates a plain element descriptor object; React does not create a component instance or allocate its hooks/state until that element is actually rendered in the tree.

**Example**:
```jsx
import { createRoot } from 'react-dom/client';
import App from './components/App';

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
```

**Avoid**: Calling legacy `ReactDOM.render(<App />, container)`, mounting multiple disconnected React roots across one page when a single tree works, or defining dozens of components inside the entry file.

**Source**: [Hello React — Joy of React](https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/01-hello-react), [Application Structure — Joy of React](https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/04-app-structure), [Why the Dance? — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/03.05-why-the-dance), [Component Instances — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/09-component-instances)
