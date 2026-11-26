> Full index: [index-astro.md](index-astro.md)

# Treat Astro scoped styles as file-local and opt into global explicitly

**When to use**: When a layout or component `<style>` does not appear to affect markup that the file clearly renders through a slot or child page.

**Rule**: A default `<style>` in an `.astro` file styles only the markup written in that file—not content passed into `<slot />` or a child page that uses the layout. That is the point of scoping. To style descendants you do not own, opt in: `is:global` on the `<style>` tag makes every rule global, or wrap a selector in `:global(...)`. If you `:global()` only the first selector in a comma list, later selectors can stay scoped and the first four items in a list may not match—wrap the list in `:is()` / `:where()`. Prefer a real global stylesheet for site-wide element styles rather than forcing a layout’s scoped block to reach into every page.

**Example**:
```astro
<style is:global>
  h1, h2 { line-height: 1.1; }
</style>

<style>
  :global(:is(h1, h2, h3)) { text-wrap: balance; }
</style>
```

**Avoid**: Expecting `BaseLayout` scoped `h2` rules to style the page’s `<h2>`, or writing `:global(h1), h2, h3` and assuming the whole list is global.

**Source**: [The "problem" with scoped styles — Beyond CSS](https://module-5.beyondcss.dev/lessons/the-problem-with-scoped-styles), [CSS and Astro — Beyond CSS](https://module-5.beyondcss.dev/lessons/css-and-astro), [Astro styling](https://docs.astro.build/en/guides/styling/)
