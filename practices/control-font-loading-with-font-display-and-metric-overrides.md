> Full index: [index.md](index.md)

# Control FOIT/FOUT with `font-display` and fallback metric overrides

**When to use**: When configuring `@font-face` rules and optimizing Cumulative Layout Shift (CLS) for web fonts.

**Rule**: Avoid `font-display: block` for body text (causes long invisible text). Prefer `font-display: fallback` (~100ms block, ~3s swap) for balanced UX without late flashes, or `optional` for zero CLS. Test first-visit behavior in DevTools with 3G throttling and "Disable local fonts" enabled, and minimize swap layout shift using fallback `@font-face` metric descriptors (`size-adjust`, plus `ascent-override`/`descent-override` noting Safari still lacks metric overrides).

**Example**:
```css
@font-face {
  font-family: 'BrandSans';
  src: url('/fonts/brand.woff2') format('woff2');
  font-display: fallback;
}
@font-face {
  font-family: 'BrandFallback';
  src: local('Arial');
  size-adjust: 96%;
}
```

**Avoid**: Testing font loading only on fast localhost with locally installed fonts, or using `font-display: swap` with wildly mismatched fallback metrics.

**Source**: [Font Loading UX — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/06-typography-and-media/09-font-display), [How to avoid layout shifts caused by web fonts — Simon Hearne](https://simonhearne.com/2021/layout-shifts-webfonts/#reduce-layout-shift-with-f-mods), [Font metric overrides — Can I use](https://caniuse.com/wf-font-metric-overrides), [Emulate local fonts — Chrome DevTools](https://developer.chrome.com/blog/new-in-devtools-86/#emulate-local-fonts)
