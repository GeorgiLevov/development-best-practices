> Full index: [index-ui-engineering.md](index-ui-engineering.md)

# Use Motion `layout` FLIP transforms safely and shield child text from scale distortion

**When to use**: When smoothly animating CSS layout shifts (`justify-content`, flex/grid reflows, expanding cards) using Motion's `layout` prop.

**Rule**: Use `layout` (or `layout="position"` / `layout="size"`) on `<motion.*>` elements to animate layout changes via GPU-accelerated FLIP `transform`s instead of mutating `width`, `height`, `top`, or `left`. Ensure inline tags like `<span>` or `<a>` use `display: block` or `inline-block` so CSS transforms apply. When an element's aspect ratio changes during a `layout` animation, protect child text from stretching by wrapping it in `<motion.p layout="position">` with identical `transition` settings (and flex-centering shrinkwrapped labels so text doesn't snap), and declare explicit initial `borderRadius` and single `boxShadow` styles so Motion counter-scales corners cleanly without twitching. If the user can retrigger mid-flight (spam-clicking a shuffle), the in-progress FLIP has the rug pulled out from under it — use a faster spring, or briefly disable the trigger until the spring settles. CSS View Transitions remain a lighter alternative for some DOM swaps, but they are weaker at mid-animation interrupts and scroll, which is why Motion `layout` is still the right tool for interactive reflows.

**Example**:
```jsx
<motion.div
  layout
  style={{ borderRadius: 12, boxShadow: '0 4px 12px rgb(0 0 0 / 0.12)' }}
  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
>
  <motion.span
    layout="position"
    style={{ display: 'inline-block' }}
    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
  >
    {label}
  </motion.span>
</motion.div>
```

**Avoid**: Applying `layout` to `display: inline` spans without `display: block`/`inline-block`, mixing mismatched `transition` configs between parent and `layout="position"` children, or animating `width`/`height` directly.

**Source**: [Layout Animations — Joy of React](https://courses.joshwcomeau.com/joy-of-react/07-framer-motion/03-layout-animations), [Text Distortion & Layout Gotchas — Joy of React](https://courses.joshwcomeau.com/joy-of-react/07-framer-motion/03.03-layout-gotchas), [Layout Animations — Whimsical Animations](https://courses.joshwcomeau.com/wham/motion-and-react/03-layout-animations), [Working With Groups — Whimsical Animations](https://courses.joshwcomeau.com/wham/motion-and-react/04.01-layout-groups), [Troubleshooting — Whimsical Animations](https://courses.joshwcomeau.com/wham/motion-and-react/06-troubleshooting), [Layout Animation — Motion Docs](https://motion.dev/docs/react-layout-animations), [FLIP Your Animations — Aerotwist](https://aerotwist.com/blog/flip-your-animations/)
