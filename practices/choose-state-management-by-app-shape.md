> Full index: [index-react.md](index-react.md)

# Choose state architecture by app shape instead of defaulting to Redux

**When to use**: When deciding how to manage global or shared state in a new or growing React app.

**Rule**: Match the state tool to what the application actually struggles with rather than adding Redux by default:
1. **Mostly static/content sites** with small global UI state: use React state and Context.
2. **Server-state / CRUD dashboards and SaaS apps** (where real complexity is fetching, caching, revalidation, pagination, and optimistic updates): pair React state with a dedicated server-cache library (TanStack Query, SWR, Apollo, or RTK Query).
3. **Client-heavy tools** (editors, canvases, games with rich coordinated client state): consider Redux (or `useReducer`-backed stores) where centralized actions and time-travel debugging repay the boilerplate.

**Example**:
```text
Content site / blog     -> React state + Context
CRUD / SaaS dashboard   -> React state + SWR / TanStack Query / RTK Query
Browser editor / game   -> Redux or useReducer store
```

**Avoid**: Installing a heavy global store just to cache REST/GraphQL server responses or manage simple local form/UI toggles.

**Source**: [State Management Tools — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/10-global-state), [RTK Query Overview — Redux Toolkit](https://redux-toolkit.js.org/rtk-query/overview)
