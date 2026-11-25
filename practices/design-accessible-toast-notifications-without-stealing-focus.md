> Full index: [index-ui-engineering.md](index-ui-engineering.md)

# Design accessible toast notifications as passive live regions without stealing focus

**When to use**: When building or customizing toast / snackbar notification shelves.

**Rule**: Treat toast notifications as passive, non-blocking status feedback—unlike modals, **never move or trap keyboard focus** onto a toast when it appears. Render the stack in a semantic `<ol role="region" aria-live="polite" aria-label="Notifications">` (using `"assertive"` only when interrupting for urgent failures), prefix each message's severity via `<VisuallyHidden>{variant} - </VisuallyHidden>` so color/icons are not the sole cue, put `aria-label="Dismiss message"` and `aria-live="off"` on each close button so screen readers do not announce dismiss-button markup as notification text, and bind `Escape` globally so keyboard users can dismiss visible toasts without Tabbing across the page.

**Example**:
```jsx
<ol className={styles.shelf} role="region" aria-live="polite" aria-label="Notifications">
  {toasts.map(({ id, variant, message }) => (
    <li key={id}>
      <div className={`${styles.toast} ${styles[variant]}`}>
        <p>
          <VisuallyHidden>{variant} - </VisuallyHidden>
          {message}
        </p>
        <button type="button" onClick={() => dismissToast(id)} aria-label="Dismiss message" aria-live="off">
          <X aria-hidden="true" />
        </button>
      </div>
    </li>
  ))}
</ol>
```

**Avoid**: Stealing focus into newly spawned toasts, conveying toast severity (`error` vs `success`) through color/icon alone, or omitting `aria-live="off"` on inline dismiss buttons inside live regions.

**Source**: [project-toast — Joy of React](https://github.com/joy-of-react/project-toast), [Toast — Radix Primitives](https://www.radix-ui.com/docs/primitives/components/toast)
