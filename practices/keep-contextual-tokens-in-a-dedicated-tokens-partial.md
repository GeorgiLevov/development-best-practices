> Full index: [index-design-systems.md](index-design-systems.md)

# Keep contextual and component tokens in a dedicated `_tokens` partial

**When to use**: When choosing where alias and component tokens live after global palettes, type, and sizes already have their own files.

**Rule**: Prefer one `_tokens.scss` for contextual and component tokens, and leave globals in `_colors.scss`, `_typography.scss`, and `_sizes.scss`. Set up a project by editing the global files first so values trickle down; then adjust individual components in `_tokens.scss` without hopping across four folders. Alternatives are valid: keep aliases next to their type (easy to find “all colors,” hard when a card’s padding and background live in different files), or give each component its own token partial (precise, but `Ctrl+P` fills with duplicate names). The choice is reversible; pick the option that matches how you navigate the repo.

**Example**:
```scss
// abstracts/_tokens.scss
@use "colors" as *;
@use "sizes" as *;

$color-text-default: $color-neutral-700;
$card-body-padding: $size-8;
```

**Avoid**: Scattering `$card-*` tokens across every global file with no agreed home, or forking the architecture on every new site.

**Source**: [File organization with design tokens — Beyond CSS](https://module-4.beyondcss.dev/lessons/file-organization-with-design-tokens), [Contextual & component sizes — Beyond CSS](https://module-4.beyondcss.dev/lessons/contextual-amp-component-sizes)
