> Full index: [index.md](index.md)

# Self-host subsetted `.woff2` web fonts instead of hotlinking font CDNs

**When to use**: When shipping custom web fonts in production web applications.

**Rule**: Self-host web fonts as compressed `.woff2` files on your own origin (using tools like `next/font`, Fontsource NPM packages, or subsetting with `glyphhanger` / `unicode-range`) rather than hotlinking external font CDNs. Self-hosting removes third-party DNS/TLS connection latency, works offline, prevents upstream font changes, and avoids GDPR liability from leaking visitor IP addresses to third-party servers.

**Example**:
```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-latin-400.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

**Avoid**: Serving un-subsetted `.ttf`/`.otf` files or hotlinking external Google Fonts stylesheets in EU/privacy-sensitive production apps without consent.

**Source**: [Web Fonts — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/06-typography-and-media/08-web-fonts), [Font Optimization — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/06-typography-and-media/10-font-optimization), [Fontsource Introduction](https://fontsource.org/docs/getting-started/introduction), [Website fined over Google Fonts GDPR — The Register](https://www.theregister.com/2022/01/31/website_fine_google_fonts_gdpr/)
