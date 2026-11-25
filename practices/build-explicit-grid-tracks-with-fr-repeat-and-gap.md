> Full index: [index.md](index.md)

# Define grid tracks with `fr`, `repeat()`, `gap`, and explicit vs implicit sizing

**When to use**: When specifying columns, rows, and gutters in CSS Grid containers.

**Rule**: Define explicit tracks with `grid-template-columns` / `grid-template-rows`, `repeat(N, track)`, and `gap` (~97.4% Grid support). Use `fr` (preferring `1fr` when only one track is flexible) to share remaining space flexibly, because `%`, `px`, and `rem` tracks are hard limits that overflow if content won't shrink. Remember extra items beyond explicit tracks create implicit `auto`-sized tracks (`grid-auto-rows` / `grid-auto-columns`).

**Example**:
```css
.planner {
  display: grid;
  grid-template-columns: 250px repeat(5, 1fr);
  grid-auto-rows: minmax(4rem, auto);
  gap: 8px 16px;
}
```

**Avoid**: Writing `25% 75%` when flexible content or gaps are present (use `1fr 3fr` or `minmax()`), or writing `2fr` for a lone flexible track.

**Source**: [Grid Construction — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/07-css-grid/05-grid-construction), [Grid Areas — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/07-css-grid/07-grid-areas), [CSS gap in Grid Layout — Can I use](https://caniuse.com/mdn-css_properties_gap_grid_context)
