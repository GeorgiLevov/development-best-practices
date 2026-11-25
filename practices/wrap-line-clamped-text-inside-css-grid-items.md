> Full index: [index.md](index.md)

# Wrap `-webkit-line-clamp` text in a plain container inside CSS Grid layouts

**When to use**: When placing a multi-line truncated paragraph (`display: -webkit-box; -webkit-line-clamp: 3;`) into a named CSS Grid area.

**Rule**: Keep `grid-area` on a plain wrapper `<div>` around the clamped `<p>` instead of putting `display: -webkit-box` and `grid-area` on the same element, avoiding layout and clipping glitches where grid-item sizing interacts with legacy `-webkit-box` formatting.

**Example**:
```jsx
const SecondaryStory = ({ title, abstract }) => (
  <Wrapper>
    <Heading>{title}</Heading>
    <AbstractWrapper>
      <Abstract>{abstract}</Abstract>
    </AbstractWrapper>
  </Wrapper>
);

const AbstractWrapper = styled.div`grid-area: abstract;`;
const Abstract = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;
```

**Avoid**: Forcing `-webkit-box` directly on a grid item that switches areas across breakpoints without checking clipping and alignment.

**Source**: [new-grid-times-v2 (SecondaryStory) — CSS for JavaScript Developers](https://github.com/css-for-js/new-grid-times-v2)
