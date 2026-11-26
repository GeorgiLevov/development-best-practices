> Full index: [index-react.md](index-react.md)

# Handle form submission via `<form onSubmit>` with `preventDefault()`

**When to use**: When building search bars, login forms, or any interactive group of inputs with a submit action.

**Rule**: Wrap form controls in a semantic `<form>` element and handle submission in the form's `onSubmit` prop—calling `event.preventDefault()` so the browser does not trigger a full page reload—instead of wiring a submit button's `onClick` and re-implementing `Enter`-key listeners on inputs. Native `<form onSubmit>` gives you `Enter` submission, keyboard/assistive semantics, and built-in HTML validation attributes (`required`, `minLength`, `pattern`) automatically. In React 19 and current Next.js, prefer passing a Server Action to `<form action={fn}` for mutations that can run on the server: React provides `FormData`, runs the async function as a transition, and resets the fields when it completes (then `revalidatePath` as needed). A client `onSubmit` that `preventDefault`s and `fetch`es a Route Handler is still valid when you need a client-only flow, but it is not the first choice for App Router form mutations.

**Example**:
```jsx
<form
  onSubmit={(event) => {
    event.preventDefault();
    runSearch(searchTerm);
  }}
>
  <input
    type="search"
    required={true}
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <button type="submit">Search</button>
</form>
```

**Avoid**: Wrapping inputs in a `<div>` with `<button onClick={submit}>` and custom `onKeyDown` handlers for the `Enter` key, or forgetting `event.preventDefault()` on SPA forms.

**Source**: [The `onClick` Parable — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/04.02-on-click-parable), [Client-side form validation — MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation), [Actions — react.gg](https://fireship.dev/c/react/actions), [File Upload — react.gg](https://fireship.dev/c/react/file-upload-challenge), [Form Sumbmission — Fireship Next.js](https://fireship.dev/c/nextjs/adv-form-submit), [Server Actions — Fireship Next.js](https://fireship.dev/c/nextjs/adv-actions), [Forms — Next.js Docs](https://nextjs.org/docs/app/guides/forms)
