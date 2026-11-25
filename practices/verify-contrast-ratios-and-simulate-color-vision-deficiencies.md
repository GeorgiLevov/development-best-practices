> Full index: [index.md](index.md)

# Verify WCAG contrast ratios and simulate color vision deficiencies

**When to use**: When choosing text, icon, or chart colors, especially text over photos or tinted backgrounds.

**Rule**: Check every text/background pair against WCAG ratios (AA: 4.5:1 normal, 3:1 large; AAA: 7:1 and 4.5:1), treating AA as the floor. For text over images, sample the lowest-contrast pixels with a color picker and aim well above the minimum (≈6–7:1) on busy backgrounds. Remember the WCAG formula ignores non-linear perception (APCA is in progress), and test palettes with DevTools vision emulation (Chrome Rendering tab, Firefox Accessibility Inspector) for protanopia, deuteranopia, tritanopia, and achromatopsia.

**Example**:
```text
Contrast checklist:
1. Body text 16px on --color-bg: >= 4.5:1 (AA) -- prefer 7:1 for long reading.
2. Headings >= 24px (or 18.66px bold): >= 3:1.
3. White text over hero photo: sample glare/highlight pixels, target >= 6:1.
4. Chrome DevTools > Rendering > Emulate vision deficiencies: deuteranopia, protanopia.
5. Chart series must still be distinguishable (labels/patterns, not hue alone).
```

**Avoid**: Trusting a DevTools tooltip that can't detect the background, eyeballing contrast on text over images, or stopping at 4.5:1 for busy imagery.

**Source**: [Colors — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/04-colors), [Accessibility — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/04.01-color-accessibility), [New in DevTools 83: Emulate vision deficiencies — Chrome for Developers](https://developer.chrome.com/blog/new-in-devtools-83/#vision-deficiencies), [Color vision simulation — Firefox Source Docs](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector/Simulation)
