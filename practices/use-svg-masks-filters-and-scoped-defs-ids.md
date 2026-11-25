> Full index: [index-svg.md](index-svg.md)

# Use SVG `<mask>` luminance, `<filter>` chains, and instance-scoped `<defs>` IDs safely

**When to use**: When cutting smooth/stroked cutouts or sliding erasures in SVG, applying low-level `<filter>` effects, or rendering reusable React SVGs that reference `<defs>` IDs.

**Rule**: Group non-rendered definitions (`<mask>`, `<pattern>`, `<linearGradient>`, `<filter>`) inside `<defs>` for clarity. Prefer `<mask>` over `<clipPath>` inside SVG: `<mask>` uses luminance (`white` reveals, `black` hides, grays fade), works cleanly on strokes (solving round-linecap pop-outs), and supports inverse cutouts like crescent moons, whereas SVG `<clipPath>` is binary and fill-only. Remember SVG renders strokes *before* masking and `<mask>` shapes inherit coordinate caveats—verify mask transforms carefully when animating masks. Use chained `<filter>` primitives (`feGaussianBlur`, `feDropShadow`) selectively since lighting/blur filters carry heavy GPU/CPU cost on large layers. Whenever a reusable component defines `<mask>`, `<filter>`, `<linearGradient>`, or `<use>` IDs, generate a unique SSR-safe ID with `React.useId()` so multiple instances don't collide onto the first component's `<defs>`.

**Example**:
```jsx
function CrescentMoon({ offset }) {
  const maskId = React.useId();
  return (
    <svg viewBox="0 0 32 32">
      <defs>
        <mask id={maskId}>
          <rect width="32" height="32" fill="white" />
          <circle cx={offset} cy="8" r="12" fill="black" />
        </mask>
      </defs>
      <circle cx="16" cy="16" r="12" fill="gold" mask={`url(#${maskId})`} />
    </svg>
  );
}
```

**Avoid**: Hardcoding `id="moon-mask"` inside reusable components, using `crypto.randomUUID()` during SSR render, or expecting SVG `<clipPath>` to clip by a shape's `stroke`.

**Source**: [SVG Masks — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/10-masks), [Mask Gotchas — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/10.02-mask-gotchas), [The Wide World of SVG — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/11-others), [Unique IDs — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/11.01-unique-ids), [Why the SVG Filter is Awesome — Smashing Magazine](https://www.smashingmagazine.com/2015/05/why-the-svg-filter-is-awesome/)
