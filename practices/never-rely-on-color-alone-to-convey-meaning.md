> Full index: [index.md](index.md)

# Never rely on color alone to communicate status or meaning

**When to use**: When designing form validation states, destructive actions, badges, charts, or status indicators.

**Rule**: Always pair color differences (such as red for danger/errors or green for success) with explicit text labels, icons, or visual patterns so users with color vision deficiency (roughly 5–10% of people, most often red-green) receive the full message.

**Example**:
```html
<button type="button" class="btn-danger">
  <svg aria-hidden="true">...</svg>
  Delete account
</button>
```

**Avoid**: Showing only a red vs. green border or dot with no accompanying text or icon to indicate form errors or system status.

**Source**: [Escape Hatches — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/14-escape-hatches)
