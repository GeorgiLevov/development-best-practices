> Full index: [index-astro.md](index-astro.md)

# Set Open Graph and SEO tags in the Astro document head

**When to use**: When pages will be shared or indexed, especially article routes that already have a title, description, and image.

**Rule**: Emit a complete set of document and social tags from `BaseHead` (or a small helper component), driven by per-page props—not a single hard-coded `<title>`. A package such as `astro-seo-metadata` can generate the `<title>` plus `og:` and Twitter equivalents together; if you use it, remove the duplicate handwritten `<title>`. Preview the result with a meta-tag inspector (for example `astro-meta-tags` in dev). Featured images are a fine start; generated share cards (for example `astro-og-canvas`) are optional when you need the title drawn onto an image.

**Example**:
```astro
---
import { SEO } from "astro-seo-metadata";
const { title, description, image } = Astro.props;
---
<SEO title={title} description={description} image={image} />
```

**Avoid**: Shipping the same site-wide title on every article, or adding a second `<title>` after a helper already wrote one.

**Source**: [Meta & Open Graph tags — Beyond CSS](https://module-5.beyondcss.dev/lessons/meta-amp-open-graph-tags), [astro-seo-metadata](https://www.npmjs.com/package/astro-seo-metadata), [astro-meta-tags](https://github.com/patrick91/astro-meta-tags), [astro-og-canvas](https://github.com/delucis/astro-og-canvas/tree/latest/packages/astro-og-canvas)
