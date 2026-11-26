> Full index: [index-css-architecture.md](index-css-architecture.md)

# Use `postcss-preset-env` at stage 3 and add features deliberately

**When to use**: When a Sass/Vite build should compile modern CSS syntax down to a known browser list, or when generated utility CSS needs unused-class pruning.

**Rule**: `postcss-preset-env` rewrites features your browserslist does not support. Prefer the default browser list plus **`stage: 3`**, then opt in to specific features you understand. `stage: 0` is fine for personal experiments but can change under you and can explode output (logical properties are a common example). It is not a polyfill for layout features such as subgrid or container queries. Track feature IDs in the plugin’s feature list and browsersl.ist. In the same PostCSS (or Vite) pipeline, PurgeCSS can drop unused utilities if you point `content` at the real HTML; do not purge class names you build dynamically in JavaScript.

**Example**:
```js
import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: [
    postcssPresetEnv({ stage: 3 }),
  ],
};
```

**Avoid**: Enabling `stage: 0` on client work “just in case,” or assuming preset-env will invent support for container queries.

**Source**: [PostCSS and postcss-preset-env — Beyond CSS](https://module-3.beyondcss.dev/lessons/postcss-and-postcss-preset-env), [Getting started with PostCSS and postcss-preset-env — Beyond CSS](https://module-3.beyondcss.dev/lessons/getting-started-with-postcss-and-postcss-present-env), [Updating the template — Beyond CSS](https://module-3.beyondcss.dev/lessons/updating-the-template), [preset-env features](https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env/FEATURES.md), [browsersl.ist](https://browsersl.ist/)
