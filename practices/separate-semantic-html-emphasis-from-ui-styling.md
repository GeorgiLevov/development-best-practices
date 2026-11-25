> Full index: [index.md](index.md)

# Separate semantic HTML emphasis from UI styling

**When to use**: When deciding between `<strong>`/`<em>` tags and CSS `font-weight`/`font-style`.

**Rule**: Use `<strong>` (critical/urgent) and `<em>` (vocal stress/emphasis) inside prose copy so screen readers convey meaning. For UI elements like bold form labels, use CSS styling rather than wrapping UI chrome in `<strong>`.

**Example**:
```html
<p>Warning: <strong>do not</strong> skip backups.</p>
<label class="field-label">Email</label> <!-- Bolded via CSS -->
```

**Avoid**: Using `<strong>` purely to make non-urgent UI labels bold, or using `<span>` for urgent inline warnings.

**Source**: [Typography — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/07-typography)
