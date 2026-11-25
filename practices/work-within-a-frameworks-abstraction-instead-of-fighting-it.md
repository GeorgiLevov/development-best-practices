> Full index: [index-developer-mindset.md](index-developer-mindset.md)

# Work within a new framework's abstraction instead of fighting it

**When to use**: When adopting a new UI framework or paradigm whose idioms differ from your previous tools.

**Rule**: Resist the urge to bend a new framework into familiar imperative habits (such as reaching for `document.querySelector` or jQuery-style DOM mutations inside React). Invest up front in learning how the framework models state, events, and rendering so your code swims with the abstraction rather than competing with it for ownership of the DOM.

**Example**:
```jsx
// Work with declarative state and event props:
<button type="button" onClick={() => setOpen((v) => !v)}>
  {open ? 'Hide' : 'Show'}
</button>
```

**Avoid**: Mixing imperative `querySelector` DOM edits with declarative React renders on the same elements, creating state drift and brittle cleanup bugs.

**Source**: [Event Handlers — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/02-event-handlers)
