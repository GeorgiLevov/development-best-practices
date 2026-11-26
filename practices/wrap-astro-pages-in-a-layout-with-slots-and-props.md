> Full index: [index-astro.md](index-astro.md)

# Wrap Astro pages in a layout with slots and frontmatter props

**When to use**: When more than one Astro page shares a document shell, title, or navigation.

**Rule**: Treat a layout as a capitalized component in `src/layouts/`. Put the shared HTML there, render page content with `<slot />`, and pass small values (title, description) as props from `Astro.props`. Pages import the layout and wrap their markup: `<BaseLayout title="…">…</BaseLayout>`. Pull document-level tags into a `BaseHead` component and forward the same props (`<BaseHead {title} />` when the name matches). Layouts and pages are still just components; the folder is for organization.

**Example**:
```astro
---
const { title } = Astro.props;
import BaseHead from "../components/BaseHead.astro";
---
<html>
  <head><BaseHead {title} /></head>
  <body>
    <slot />
  </body>
</html>
```

**Avoid**: Duplicating the full HTML document in every page, or hard-coding the `<title>` inside the layout so every route shares one name.

**Source**: [Creating a base layout — Beyond CSS](https://module-5.beyondcss.dev/lessons/creating-a-base-layout), [Intro to props — Beyond CSS](https://module-5.beyondcss.dev/lessons/intro-to-props), [Creating a base head file — Beyond CSS](https://module-5.beyondcss.dev/lessons/creating-a-base-head-file), [A few more things on props — Beyond CSS](https://module-5.beyondcss.dev/lessons/a-few-more-things-on-props)
