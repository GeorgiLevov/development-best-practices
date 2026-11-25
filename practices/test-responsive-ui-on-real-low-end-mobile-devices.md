> Full index: [index.md](index.md)

# Test responsive UI on real budget mobile devices and visible scrollbars

**When to use**: Before shipping responsive layouts, touch controls, or heavy client-side animations.

**Rule**: Do not rely solely on desktop DevTools device emulation or a flagship laptop/iPhone. Test on real budget mobile hardware over a LAN IP or tunnel using remote debugging (`chrome://inspect#devices` for Android Chrome, Firefox `about:debugging`, Safari Web Inspector for iOS), and turn on always-visible scrollbars on macOS during testing to expose scrollbar-width overflow bugs.

**Example**:
```text
Android Chrome: Enable USB Debugging -> chrome://inspect#devices
iOS Safari:     Settings > Safari > Advanced > Web Inspector -> Safari Develop
macOS Setting:  Appearance > Show scroll bars: Always
```

**Avoid**: Treating Chrome DevTools mobile emulation as equivalent to real iOS WebKit viewport bars, touch inertia, or budget Android CPU/GPU constraints.

**Source**: [Mobile Testing — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/03-mobile-testing), [Remote Debugging Android — Chrome DevTools](https://developer.chrome.com/docs/devtools/remote-debugging/), [Enabling Web Inspector — WebKit](https://webkit.org/web-inspector/enabling-web-inspector/#ios-device)
