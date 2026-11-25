> Full index: [index.md](index.md)

# Clamp tag lists to one ellipsis line with `display: inline` items, not Flexbox

**When to use**: When a row of tags or chips must stay on a single line and truncate with a trailing `…` if the list overflows.

**Rule**: `text-overflow: ellipsis` only operates on inline content within a block container—it fails on `display: flex` containers. Style the `<ul>` as a block with `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;` (adding vertical `padding` on the `<ul>` so inline item padding isn't clipped), set each `<li>` to `display: inline`, and separate chips with `margin-inline-end` instead of `gap`.

**Example**:
```css
.tags {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px 0; /* keeps inline li padding visible */
}
.tag {
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
}
.tag:not(:last-of-type) {
  margin-inline-end: 8px;
}
```

**Avoid**: Leaving `display: flex` on the `<ul>` (overflowing tags clip abruptly without an ellipsis or wrap onto extra lines).

**Source**: [unsprinkle-v2 (Exercise 4: Tag overflow) — CSS for JavaScript Developers](https://github.com/css-for-js/unsprinkle-v2)
