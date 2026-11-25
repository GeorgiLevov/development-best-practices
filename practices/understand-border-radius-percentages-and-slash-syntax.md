> Full index: [index.md](index.md)

# Understand percentage `border-radius` and the 8-value slash syntax

**When to use**: When rounding non-square elements with percentages, building ellipses, or creating organic "blob" shapes.

**Rule**: Treat `border-radius` as four corners, each with a horizontal and a vertical radius (8 values). Percentages resolve the horizontal radius against width and the vertical against height, so `10%` on a 2:1 box yields elliptical corners and `50%` yields a full ellipse. Use pixel values when you want circular corners on non-square boxes, and use the slash syntax (`h1 h2 h3 h4 / v1 v2 v3 v4`, clockwise from top-left) or a generator for blob shapes.

**Example**:
```css
.card { border-radius: 16px; }          /* circular corners on any shape */
.oval { border-radius: 50%; }           /* ellipse matching the box */
.blob { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
.tab  { border-top-left-radius: 40px 20px; }
```

**Avoid**: Using a percentage radius on rectangular cards and expecting round corners, or guessing at blob shapes without understanding the horizontal/vertical split.

**Source**: [Border Radius — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/02-radius)
