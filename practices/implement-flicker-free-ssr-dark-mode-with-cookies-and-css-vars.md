> Full index: [index-react-fullstack.md](index-react-fullstack.md)

# Read theme cookies on the server and mutate `<html>` CSS variables directly on toggle

**When to use**: When implementing user-toggleable light/dark color themes in an SSR/Next.js App Router application without initial-paint flicker.

**Rule**: Persist the chosen theme in an HTTP cookie rather than `localStorage` alone so `RootLayout` can read `await cookies()` on the server and stamp `data-color-theme` plus the theme's CSS custom-property map directly onto `<html>` before first paint—preventing white-flash FOUC without compromising SSR hydration. When the user clicks the toggle in a Client Component, update React state, persist the cookie, and mutate `document.documentElement.dataset.colorTheme` and `document.documentElement.style.setProperty(...)` directly (~3–4 ms) instead of calling `router.refresh()` (~400 ms–1 s server round-trip). For purely static/SSG builds without request-time cookies, inject a tiny synchronous blocking `<script>` in `<head>` before content paints. On vanilla/Sass sites the same custom-property idea applies without a server: emit theme maps on `:root`, override them with `prefers-color-scheme` and/or a class, and persist a toggle in `localStorage`—see the design-systems theming practice. That path still does not replace an SSR cookie when the first HTML is rendered on the server.

**Example**:
```jsx
// app/layout.js (Server Component): read cookie and apply theme CSS vars on <html>
import { cookies } from 'next/headers';
import { DARK_TOKENS, LIGHT_TOKENS } from '@/constants';

export default async function RootLayout({ children }) {
  const theme = (await cookies()).get('color-theme')?.value ?? 'light';
  const tokens = theme === 'dark' ? DARK_TOKENS : LIGHT_TOKENS;
  return (
    <html lang="en" data-color-theme={theme} style={tokens}>
      <body>{children}</body>
    </html>
  );
}
```

**Avoid**: Reading `localStorage` in `useEffect` without a server-known cookie or blocking pre-paint script (flashes wrong colors on load), or triggering `router.refresh()` on every theme click.

**Source**: [Dark Mode — Joy of React](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/11-dark-mode), [next-dark-mode — GitHub](https://github.com/joy-of-react/next-dark-mode), [The Quest for the Perfect Dark Mode — Josh W. Comeau](https://www.joshwcomeau.com/react/dark-mode/), [Switching between themes — Beyond CSS](https://module-4.beyondcss.dev/lessons/switching-between-themes), [Manually toggling the themes — Beyond CSS](https://module-4.beyondcss.dev/lessons/manually-toggling-the-themes)
