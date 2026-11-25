> Full index: [index.md](index.md)

# Test keyboard Tab navigation across browsers

**When to use**: When verifying keyboard accessibility for links, buttons, and forms.

**Rule**: Test `Tab` and `Shift+Tab` flows across browsers, and know macOS quirks: Safari omits focus on button clicks by design, and macOS/Safari require enabling full keyboard navigation (`All controls` / `Option+Tab` setting) before `Tab` visits links and buttons.

**Example**:
```text
macOS testing checklist:
1. Enable System Settings -> Keyboard -> Keyboard navigation (all controls).
2. In Safari Advanced settings, enable "Press Tab to highlight each item on a webpage".
3. Tab forward/backward through every interactive element.
```

**Avoid**: Assuming links or buttons are broken—or assuming keyboard users can navigate—without checking macOS/Safari settings.

**Source**: [Pseudo-classes — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/04.01-pseudo-classes), [No, tabbing is not broken — Scott O'Hara](https://www.scottohara.me/blog/2014/10/03/link-tabbing-firefox-osx.html), [HTML button element — MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus)
