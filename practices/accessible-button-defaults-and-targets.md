> Full index: [index.md](index.md)

# Accessible `<button>` defaults, names, and target sizes

**When to use**: When adding any `<button>` element to an interface.

**Rule**: Set `type="button"` on buttons that do not submit forms (the default inside `<form>` is `submit`), give icon-only buttons an accessible text name, keep targets at least `44x44px` with spacing between neighbors, and maintain `4.5:1` contrast (3:1 for large text).

**Example**:
```html
<button type="button" class="icon-btn">
  <svg aria-hidden="true" viewBox="0 0 24 24">...</svg>
  <span class="visually-hidden">Add to favorites</span>
</button>
```

**Avoid**: Leaving `type` omitted on action buttons inside forms, or shipping unlabeled small icon buttons packed tightly together.

**Source**: [HTML button element — MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus)
