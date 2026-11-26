> Full index: [index-career-and-tooling.md](index-career-and-tooling.md)

# Understand transpiler vs bundler roles and choose the simplest fit instead of suffering tool paralysis

**When to use**: When picking a React or Sass/CSS build setup, or debugging compilation vs bundling errors.

**Rule**: Know the distinct jobs of your build pipeline: **compilers/transpilers** (`Babel`, `SWC`) convert JSX and modern JS syntax to browser-compatible JS, while **bundlers** (`Vite`/Rolldown, `Webpack`, `Turbopack`, `esbuild`) resolve module graphs into compressed chunks—still critical even over HTTP/2 because bundling improves zlib/brotli compression and avoids hundreds of waterfall requests. Compiling is also distinct from **polyfilling**: a transpiler rewrites syntax (arrow functions, classes, destructuring, default parameters) into older equivalents but does not add missing globals or prototype methods, so runtime APIs such as `Promise`, `fetch`, and `String.prototype.includes` still need a polyfill when the target environment lacks them. Choose the simplest toolchain matching your architecture (`Vite` for client-side SPAs; `Next.js` or similar meta-frameworks when SSR/RSC/routing are needed) and avoid "decision paralysis": React fundamentals transfer cleanly across frameworks if you ever migrate later. For stylesheets, the same rule applies: the Sass CLI (`sass --watch`) plus Autoprefixer/cssnano is enough while you need to inspect compiled CSS; Vite + Sass is the practical step up for multi-page sites with HMR; add `postcss-preset-env` (prefer stage 3, then opt in to features) when modern CSS must be compiled to a browserslist. See the CSS architecture index for those setups.

**Example**:
```bash
# Client-side SPA: fast Vite setup without SSR/RSC overhead
npm create vite@latest my-app -- --template react
```

**Avoid**: Hand-rolling custom Webpack/Babel configs for ordinary apps, spending weeks debating frameworks before building, assuming HTTP/2 multiplexing eliminates the value of bundling, or treating a syntax compile as a substitute for polyfilling `Promise`, `fetch`, or prototype methods.

**Source**: [Babel, Webpack & Meta-Frameworks — Joy of React](https://courses.joshwcomeau.com/joy-of-react/11-tools-of-the-trade/06-babel), [Boilerplates and Meta-Frameworks — Joy of React](https://courses.joshwcomeau.com/joy-of-react/11-tools-of-the-trade/08-boilerplates-and-meta-frameworks), [Forgo JS packaging? Not so fast — Khan Academy](https://blog.khanacademy.org/forgo-js-packaging-not-so-fast/), [Getting Started — Vite Docs](https://vite.dev/guide/), [Introduction to Vite — Beyond CSS](https://module-3.beyondcss.dev/lessons/vite), [PostCSS and postcss-preset-env — Beyond CSS](https://module-3.beyondcss.dev/lessons/postcss-and-postcss-preset-env), [Compiling vs Polyfills with Babel — Fireship Modern JavaScript](https://fireship.dev/c/modern-javascript/compiling-polyfills)
