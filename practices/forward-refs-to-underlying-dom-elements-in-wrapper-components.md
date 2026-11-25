> Full index: [index-react-patterns.md](index-react-patterns.md)

# Forward `ref`s and HTML prop types through custom wrapper components

**When to use**: When building design-system wrapper components around `<input>`, `<button>`, or scrollable containers that callers may focus, measure, or observe.

**Rule**: Forward `ref` down to the underlying DOM element (even through multi-layer wrappers like `SquareSlider` -> `Slider` -> `<input>`) so custom primitives support `.focus()`, `.scrollIntoView()`, and `IntersectionObserver` just like native tags. In React 19+, destructure `ref` like any normal prop (`function Slider({ label, ref, ...delegated })`); when supporting React 18 or earlier, wrap with `React.forwardRef((props, ref) => ...)` (and `React.memo(React.forwardRef(...))` when memoized). In TypeScript, derive delegated DOM attributes with `React.ComponentProps<'input'>` or `React.ComponentPropsWithRef<'button'>` rather than manually redeclaring HTML props.

**Example**:
```tsx
// React 19+ (use React.forwardRef for React <=18 compatibility)
type SliderProps = Omit<React.ComponentProps<'input'>, 'type'> & {
  label: string;
};

function Slider({ label, ref, className = '', ...delegated }: SliderProps) {
  const id = React.useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        ref={ref}
        {...delegated}
        type="range"
        id={id}
        className={`slider ${className}`.trim()}
      />
    </div>
  );
}
```

**Avoid**: Swallowing `ref` on reusable form controls, placing `{...delegated}` after locked attributes like `type="range"` or `id`, or omitting a wrapper's `forwardRef` when wrapping another `forwardRef` component.

**Source**: [Forwarding Refs — Joy of React](https://courses.joshwcomeau.com/joy-of-react/04-component-design/04-forwarding-refs), [ForwardRef Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/04-component-design/04.01-forwardref-exercises), [ComponentProps: React's Most Useful Type Helper — Total TypeScript](https://www.totaltypescript.com/react-component-props-type-helper)
