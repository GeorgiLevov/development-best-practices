> Full index: [index-astro.md](index-astro.md)

# Model Tina CMS collections with real paths, references, and honest field UI

**When to use**: When editors should manage Astro content collections from Tina instead of raw Markdown, including related records such as authors.

**Rule**: Point Tina’s collection `path` at the actual `src/content/…` folder, then model every field the frontmatter schema already expects. Use `type: "reference"` (plus `collections`) for relationships such as post → author rather than a free-text author string, and customize the reference dropdown label so editors do not have to pick a filename. Match the control to the content: a bio is a `textarea`, not rich text that invites images and links; add field descriptions and sensible defaults (for example a featured-post toggle). Keep the Tina schema and the Astro `defineCollection` schema in agreement, including image paths.

**Example**:
```ts
{
  name: "author",
  type: "reference",
  collections: ["author"],
}
```

**Avoid**: Leaving Tina pointed at its sample “Hello World” post, storing authors as unvalidated strings, or giving a one-line bio a full rich-text editor.

**Source**: [Tina CMS — Beyond CSS](https://module-5.beyondcss.dev/lessons/tina-cms), [Content modeling — Beyond CSS](https://module-5.beyondcss.dev/lessons/content-modeling), [The authors as a reference field — Beyond CSS](https://module-5.beyondcss.dev/lessons/the-ahuthors-as-a-reference-field), [Improving the content collections — Beyond CSS](https://module-5.beyondcss.dev/lessons/improving-the-content-collections), [Fixing the path to the images — Beyond CSS](https://module-5.beyondcss.dev/lessons/fixing-the-path-to-the-images)
