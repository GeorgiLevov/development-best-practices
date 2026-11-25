> Full index: [index.md](index.md)

# Balance headings with `text-wrap: balance` and wrap long words safely

**When to use**: When preventing orphan heading words, overflowing URLs, or split short phrases.

**Rule**: Apply `text-wrap: balance` (~94% support) on short headings, captions, and blockquotes (browsers cap it to ~6–10 lines, keeping performance safe). Pair `overflow-wrap: break-word` with `hyphens: auto` (and a valid `<html lang="en">` attribute) so long URLs or words wrap without overflowing narrow columns—noting Firefox skips auto-hyphenating capitalized words—and join inseparable short words with `&nbsp;`.

**Example**:
```css
h1, h2, h3 { text-wrap: balance; }
.prose {
  overflow-wrap: break-word;
  hyphens: auto;
}
```

**Avoid**: Using `hyphens: auto` without a `lang` attribute on `<html>` (it silently disables hyphenation) or expecting `text-wrap: balance` to style 20-line paragraphs.

**Source**: [Text Overflow — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/06-typography-and-media/03-text-overflow), [text-wrap — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap), [hyphens — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens#browser_compatibility), [Bug 1550532 — Mozilla Bugzilla](https://bugzilla.mozilla.org/show_bug.cgi?id=1550532)
