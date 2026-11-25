> Full index: [index.md](index.md)

# Configure compiler plugins for readable class names, SSR IDs, and prefixes

**When to use**: When setting up CSS-in-JS or CSS Modules with Vite, Next.js, Babel, or SWC.

**Rule**: Enable your styling tool's SWC/Babel compiler plugin (`displayName` and `ssr` options) so DevTools surfaces component-readable class names instead of opaque hashes and SSR class IDs match on hydration. Also verify vendor-prefix configuration explicitly—for example PostCSS Autoprefixer or `<StyleSheetManager enableVendorPrefixes>` in styled-components v6+ when using properties like `backdrop-filter`.

**Example**:
```jsx
import { StyleSheetManager } from 'styled-components';

export function App({ children }) {
  return (
    <StyleSheetManager enableVendorPrefixes>
      {children}
    </StyleSheetManager>
  );
}
```

**Avoid**: Leaving SSR style plugins unconfigured (causing hydration mismatches) or assuming a v6+ CSS-in-JS runtime injects vendor prefixes automatically when disabled by default.

**Source**: [Tooling — styled-components](https://styled-components.com/docs/tooling), [Installation and Setup — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/04-setup), [Vendor Prefixes — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/09.01-vendor-prefixes)
