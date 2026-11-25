> Full index: [index-react-patterns.md](index-react-patterns.md)

# Decouple reusable UI primitives from domain objects

**When to use**: When designing reusable UI components or refactoring large feature screens.

**Rule**: Place components consciously along the spectrum from low-level, domain-agnostic UI primitives (`Card`, `StarRating`, `PriceDisplay`) to high-level feature containers (`ProductDetails`, `PlanSelector`). Extract repeated widgets and visual patterns into standalone primitives that accept only the minimal scalar props they actually render (`price`, `id`, `rating`)—never pass whole domain records like `plan` or `user` into a generic leaf component, because doing so couples the primitive to one API shape and blocks reuse. Avoid rigid Atomic Design folder splits (`atoms/`, `molecules/`, `organisms/`) whose boundaries blur in practice; organize by technical role (`components/`, `hooks/`, `helpers/`).

**Example**:
```jsx
// Low-level primitive: decoupled from any `plan` or `product` schema
function PriceDisplay({ id, price, currency = 'USD' }) {
  return <span data-id={id}>{formatCurrency(price, currency)}</span>;
}

// High-level feature component composes primitives
function PlanCard({ plan }) {
  return (
    <Card elevation={2}>
      <h3>{plan.title}</h3>
      <PriceDisplay id={plan.id} price={plan.monthlyPrice} />
    </Card>
  );
}
```

**Avoid**: Passing `plan={plan}` into `<PriceDisplay />` just to read `plan.price`, keeping 200-line product pages monolithic without extracting reusable widgets, or splitting `src/components/` into `atoms/` and `molecules/`.

**Source**: [Spectrum of Components — Joy of React](https://courses.joshwcomeau.com/joy-of-react/04-component-design/01-spectrum-of-components), [Spectrum Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/04-component-design/01.01-spectrum-exercises), [Principle of Least Privilege — Joy of React](https://courses.joshwcomeau.com/joy-of-react/05-happy-practices/06-principle-of-least-privilege), [Atomic Design — Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
