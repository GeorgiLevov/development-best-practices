> Full index: [index.md](index.md)

# Build custom progress bars with `progressbar` ARIA roles and corner clipping

**When to use**: When native `<progress>` styling cannot match your design or animation requirements.

**Rule**: Prefer native `<progress>` when platform styling suffices; when building a custom bar, set `role="progressbar"`, an accessible name (`aria-label`/`aria-labelledby`), `aria-valuemin`/`aria-valuemax`, and `aria-valuenow` (omitted when indeterminate; add `aria-valuetext` if percentages mislead, noting child nodes become presentational). Clip inner fill corners cleanly with an outer `border-radius` + `overflow: hidden`/`clip` wrapper.

**Example**:
```jsx
<BarTrack role="progressbar" aria-label="Upload progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}>
  <CornerTrimmer>
    <BarFill style={{ '--width': `${value}%` }} />
  </CornerTrimmer>
</BarTrack>
```

**Avoid**: Rendering an unlabelled `<div>` progress bar without `role="progressbar"` and `aria-valuenow`, or trying to style `<progress>` pseudo-elements identically across every browser.

**Source**: [ARIA: progressbar role — MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role), [The HTML5 progress Element — CSS-Tricks](https://css-tricks.com/html5-progress-element/), [ProgressBar — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/18-workshop-progress)
