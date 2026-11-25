> Full index: [index.md](index.md)

# Set the viewport meta tag without ever disabling user zoom

**When to use**: When configuring the HTML `<head>` for any responsive web page or application.

**Rule**: Include `<meta name="viewport" content="width=device-width, initial-scale=1" />` so mobile browsers lay out CSS pixels at device width instead of zooming out a ~980px desktop canvas. Never add `user-scalable=no` or `maximum-scale=1`, which blocks pinch-to-zoom for users with low vision and violates WCAG 1.4.4.

**Example**:
```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

**Avoid**: Omitting the viewport meta tag on mobile-targeted pages or setting `maximum-scale=1` to stop iOS input zoom (fix input font-size instead).

**Source**: [Mobile and Landscape — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/02-mobile-landscape), [CSS Viewport Module Level 1 — W3C](https://www.w3.org/TR/css-device-adapt-1/#viewport-meta), [WCAG 1.4.4 Resize Text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html)
