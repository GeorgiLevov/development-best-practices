> Full index: [index-css-architecture.md](index-css-architecture.md)

# Compile multi-page Sass sites with Vite, not only a Sass CLI watch

**When to use**: When a static multi-page site needs HMR, a production bundle, and Sass in one tool, after you already understand how Sass compiles to CSS.

**Rule**: Vite compiles Sass when the `sass` package is installed, serves with Hot Module Replacement, and hides the compiled CSS in dev—learn Sass with the CLI first if you still need to inspect output. Vite’s default is a single `index.html`. For ordinary multi-page sites, list every HTML entry in `vite.config.js` (`build.rollupOptions.input`). Use `about/index.html` for pretty URLs (`/about`). To keep the repo root clean, set `root` to `src/`, `build.outDir` to `../dist`, and `emptyOutDir: true`; leave `package.json` and config files in the repo root. A `type="module"` script in `<head>` behaves like `defer`. This manual entry list is fine for roughly ten pages; larger sites should move to a generator such as Astro (still Vite under the hood).

**Example**:
```js
import { resolve } from "node:path";

export default {
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: { input: {
      main: resolve(__dirname, "src/index.html"),
      about: resolve(__dirname, "src/about/index.html"),
    } },
  },
};
```

**Avoid**: Expecting extra HTML files to appear in the production build just because they worked in `vite dev`, or moving `package.json` into `src/`.

**Source**: [Introduction to Vite — Beyond CSS](https://module-3.beyondcss.dev/lessons/vite), [Setting up Vite for multiple pages — Beyond CSS](https://module-3.beyondcss.dev/lessons/setting-up-vite-for-multiple-pages), [Getting started with Vite — Beyond CSS](https://module-3.beyondcss.dev/lessons/getting-started-with-vite)
