> Full index: [index.md](index.md)

# Developer Mindset, Debugging & Tooling

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

## Developer Mindset & Learning

- [Learn principles over memorizing recipes](learn-principles-over-memorizing-recipes.md): Learn CSS layout algorithms and mental models rather than memorizing isolated snippets.
- [Adopt a growth mindset for debugging and learning](adopt-growth-mindset-for-debugging.md): Treat tough bugs and unfamiliar tools as trainable skills rather than fixed personal limits.
- [Notice fixed-mindset triggers as cues](notice-fixed-mindset-triggers.md): Spot defensiveness, avoidance, or shortcut-seeking as cues to shift back into learning mode.
- [Praise process and strategy, not innate talent](praise-process-and-strategy-not-innate-talent.md): Credit specific strategies, rigor, and error recovery in reviews instead of innate smarts.
- [Learn by active struggle and experimentation](learn-by-active-struggle-and-experimentation.md): Experiment in live code and attempt problems before reading solutions to build recall.
- [Paraphrase notes to retain concepts](paraphrase-notes-to-retain-concepts.md): Rewrite newly learned concepts in your own words as concise bookmarks.
- [Learn in public for retention and accountability](learn-in-public-for-accountability.md): Share small demos, notes, and progress publicly to reinforce learning and accountability.

- [Prefer simple, readable code over clever CSS or JS tricks](prefer-simple-readable-code-over-clever-tricks.md): Write straightforward, maintainable CSS and isolate unavoidable complexity instead of shipping clever one-liners.

## Debugging & Tooling

- [Inspect inactive CSS hints in DevTools](inspect-inactive-css-hints-in-devtools.md): Use DevTools element inspection and inactive-CSS warnings (Chrome/Firefox) to catch unmet dependencies.
- [Debug CSS surprises from first principles](debug-css-surprises-from-first-principles.md): Consult MDN/specs and run minimal isolated tests when CSS surprises you instead of guessing.
- [Use CSS comments for sections and rule isolation](use-css-comments-for-sections-and-debugging.md): Use CSS /* */ comments to mark stylesheet sections and isolate rules while debugging.
- [Verify browser support before dropping fallbacks](verify-browser-support-before-dropping-fallbacks.md): Check current global support tables before shipping modern CSS without fallbacks or build transforms.
- [Embed live playgrounds in technical docs](embed-live-playgrounds-in-technical-docs.md): Embed live-editable playgrounds with Reset, Format, and isolated supporting tabs in technical docs.
- [Sandbox and self-host live code previews](sandbox-and-self-host-live-code-previews.md): Isolate editable code previews in cross-origin iframes and watch privacy-blocker issues on static templates.
- [Update immutable editor state via transactions](update-immutable-editor-state-via-transactions.md): Treat CodeMirror-style editor state as immutable and apply updates only via transactions.
- [Prevent `100vw` horizontal overflow and debug overflowing boxes directly](prevent-and-debug-horizontal-overflow.md): Prefer `100%` over `100vw` and measure wide elements directly instead of masking overflow with `overflow-x: hidden` on `body`.
- [Configure compiler plugins for readable class names, SSR IDs, and prefixes](configure-compiler-plugins-for-dev-names-and-ssr.md): Enable SWC/Babel `displayName` and `ssr` plugins and check vendor-prefix settings for properties like `backdrop-filter`.
