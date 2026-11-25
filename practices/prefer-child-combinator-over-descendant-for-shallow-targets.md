> Full index: [index.md](index.md)

# Prefer child combinator `>` for shallow targets

**When to use**: When styling direct children of a component that may contain deeper nested elements of the same tag.

**Rule**: Use the child combinator (`parent > child`) instead of the descendant combinator (`parent child`) whenever nested lists, menus, or subcomponents should not receive the parent's rule.

**Example**:
```css
/* Styles only top-level list items, not nested sub-lists */
.menu > li {
  border-bottom: 1px solid hsl(0deg 0% 85%);
}
```

**Avoid**: Using a space descendant combinator (`ul li`) on recursive or nested structures where inner items break.

**Source**: [Combinators — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/04.03-combinators)
