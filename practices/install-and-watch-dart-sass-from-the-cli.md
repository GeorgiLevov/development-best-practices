> Full index: [index-sass.md](index-sass.md)

# Install and watch Dart Sass from the CLI, not a stale GUI or LibSass extension

**When to use**: When adding Sass to a machine or a simple project, before a full bundler setup exists.

**Rule**: Use the official **Dart Sass** distribution published as the `sass` npm package. Ruby Sass and LibSass (including Node-Sass-based editor extensions) are unmaintained and silently reject modern CSS such as `min()`/`max()` and Sass features such as `@forward`. Install with `npm install -g sass` (plus a later per-project install) and confirm with `sass --version`. Compile with `sass input.scss output.css` and iterate with `sass --watch input.scss output.css`. Leave source maps on in development so DevTools points at the originating Sass line, not the compiled CSS; turn maps off for production later. Prefer the CLI over unmaintained “compile on save” extensions. Paid GUIs such as Prepros or CodeKit can compile Dart Sass, but they are optional—get comfortable with npm and the terminal either way.

**Example**:
```bash
npm install -g sass
sass --version
sass --watch src/styles.scss public/css/styles.css
```

**Avoid**: Relying on a LibSass/Node-Sass extension or an abandoned GUI, then wondering why `min()` or `@forward` will not compile. Do not treat a global install as a substitute for pinning `sass` in each project later.

**Source**: [Installing Sass — Beyond CSS](https://module-1.beyondcss.dev/lessons/installing-sass), [Making sure Sass is working — Beyond CSS](https://module-1.beyondcss.dev/lessons/making-sure-sass-is-working), [Watching files — Beyond CSS](https://module-1.beyondcss.dev/lessons/watching-files), [What are source maps? — Beyond CSS](https://module-1.beyondcss.dev/lessons/what-are-source-maps), [sass on npm](https://www.npmjs.com/package/sass), [Install Sass](https://sass-lang.com/install)
