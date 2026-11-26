> Full index: [index-sass.md](index-sass.md)

# Choose SCSS or indented Sass deliberately, and use `//` for comments that must not ship

**When to use**: When starting a Sass project, switching syntaxes, or leaving comments in stylesheets.

**Rule**: “Sass” is the language name (not an acronym). It has two syntaxes: the original **indented** syntax (`.sass`, whitespace instead of `{ }`, `;`) and **SCSS** (“Sassy CSS”, `.scss`), which is CSS-compatible and is the better default if you also teach or paste CSS. Features are the same; only the punctuation differs, and nesting is just further indentation in `.sass`. Keep `/* */` comments when they should appear in the compiled CSS; use `//` (or the editor’s comment shortcut in a Sass file) for notes that must stay out of the shipped stylesheet.

**Example**:
```scss
// Author note — stripped from the compiled CSS
$clr-primary: #234;

/* Public banner in the output CSS */
.hero { color: $clr-primary; }
```

**Avoid**: Writing “SASS” as if it were an acronym, mixing indented and SCSS punctuation in the same file, or leaving `/* debug */` comments that you never wanted users to download.

**Source**: [Sass vs SCSS — Beyond CSS](https://module-1.beyondcss.dev/lessons/sass-vs-scss), [Sass vs. CSS comments — Beyond CSS](https://module-1.beyondcss.dev/lessons/sass-vs-css-comments)
