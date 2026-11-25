# Development Best Practices

> Curated development practices Georgi trusts. Agents should read this index first, then open only the files that match the task.

## Core

- [HTML & Semantics](html-semantics.md): Use semantic tags, correct heading hierarchy, accessible landmarks.
- [CSS & Layout](css-layout.md): Prefer modern layout (Flexbox, Grid), avoid magic numbers, keep specificity low.
- [Accessibility](a11y.md): Keyboard, focus, ARIA only when needed, contrast, reduced motion.
- [Performance](performance.md): Image formats, lazy loading, avoid layout shift, critical CSS.

## Components & Patterns

- [React Patterns](react-patterns.md): Composition over inheritance, controlled vs uncontrolled, key usage.
- [State](state.md): Where state lives, when to lift, when to use context vs props.
- [Forms](forms.md): Validation timing, error messages, progressive enhancement.

## Optional

- [Testing](testing.md): What to unit test vs what to leave to integration.
- [Naming](naming.md): File, component, and class naming conventions.

## CSS Fundamentals & Layout

- [CSS Fundamentals & Layout index](index-css-layout.md): Cascade, selectors, Flow layout, positioning, Flexbox, Grid, and responsive or behavioural CSS. (75 practices; sections: CSS Fundamentals; Layout, Flow & Positioning; Flexbox Layout; CSS Grid Layout; Responsive & Behavioural CSS.)

## Sass Language, Modules & CLI Tooling

- [Sass Language, Modules & CLI Tooling index](index-sass.md): Dart Sass CLI and source maps, SCSS vs indented syntax and silent comments, shallow nesting vs native CSS nesting, the `&` parent selector, compile-time `$variables` and Sass `rgb()` helpers, mixins vs `@extend`, interpolation and math, `@use` built-in modules, loops, `@if`/`if()`, functions, and validated map-driven mixins. (17 practices; sections: CLI, Syntax & Comments; Nesting & the Parent Selector; Variables, Color & Compile-Time Math; Mixins, Extends & Interpolation; Modules, Loops, Functions & Maps.)

## Typography, Color, Media & Visual Effects

- [Typography, Color, Media & Visual Effects index](index-typography-media.md): Type, color, units, images and icons, plus filters, shadows, gradients, border radius, and clip-path. (69 practices; sections: Typography & Color; Units & Accessibility; Images, Icons & Media; Visual Effects: Filters, Shadows, Gradients & Shapes.)

## UI Engineering: Components, Interaction & Motion

- [UI Engineering: Components, Interaction & Motion index](index-ui-engineering.md): React component architecture, interaction, focus, scrolling, `:has()`, and animations. (54 practices; sections: Component Architecture & UI Patterns; Interaction, Focus & Scrolling; Animations & Motion.)

## React Fundamentals, State & Forms

- [React Fundamentals, State & Forms index](index-react.md): JSX, components, keys, conditional rendering, styling, file structure, `useState`, render/commit, events, forms, and state architecture. (22 practices; sections: JSX, Components & Structure; State, Events & Forms.)

## React Component Design & Patterns

- [React Component Design & Patterns index](index-react-patterns.md): Component abstraction spectrum, `ref` forwarding, constrained polymorphism, named-export compound components, JSX slots, controlled vs uncontrolled APIs, `key` state resets, Context Providers & memoization, `useReducer`, Immer, `createPortal`, and Error Boundaries. (13 practices; sections: Component APIs, Slots & Composition; State Architecture, Context & Reducers; Immutable Updates, Portals & Error Boundaries.)

## React Hooks, Effects & Performance

- [React Hooks, Effects & Performance index](index-react-hooks.md): `useId`, Rules of Hooks, `useRef`, `useEffect` & cleanup, StrictMode, stale closures, custom hooks, data fetching, memoization, and React Compiler. (12 practices; sections: `useId`, Rules of Hooks & Refs; `useEffect`, Cleanup & Closures; Custom Hooks & Data Fetching; Render Optimization, Memoization & React Compiler.)

## Developer Mindset, Debugging & Tooling

- [Developer Mindset, Debugging & Tooling index](index-developer-mindset.md): Learning habits, debugging strategy, and DevTools/package tooling workflows. (20 practices; sections: Developer Mindset & Learning; Debugging & Tooling.)

## Full-Stack React, Next.js & Server Architecture

- [Full-Stack React, Next.js & Server Architecture index](index-react-fullstack.md): Rendering paradigms (CSR/SSR/SSG/ISR), React Server Components, `'use client'` boundary minimization, SSR hydration safety, App Router & Next 15+ async APIs, persistent layout state, bundle analysis, static/dynamic rendering, `generateMetadata` & `React.cache`, Streaming SSR & Suspense, `next/dynamic` facades, and flicker-free SSR dark mode. (14 practices; sections: Rendering Models, RSCs & Client Boundaries; App Router, State Persistence & Static/Dynamic Builds; Metadata, Caching, Streaming & Lazy Loading.)

## JavaScript Foundations for Modern React

- [JavaScript Foundations for Modern React index](index-javascript.md): `const` assignment vs mutation and shallow spread, declarative array methods vs premature `for` optimizations, falsy edge cases and `??`, ES module scope, readable timers and symmetric/outside-click listeners, and `fetch` `response.ok` + `AbortController` race cancellation. (6 practices; sections: Data, Immutability, Scope & Control Flow; Timers, Events & Async Networking.)

## Career, Engineering Process & Tooling

- [Career, Engineering Process & Tooling index](index-career-and-tooling.md): Terminal fluency, lean editor/Prettier/ESLint setup, Node LTS/`nvm`/npm scripts, transpiler vs bundler mental models without decision paralysis, guided vs unguided learning to escape tutorial hell, tailored hiring-funnel applications, portfolio engineering case studies, and structured technical interviews. (8 practices; sections: Engineering Workflow & Tooling; Learning, Portfolio & Technical Interviews.)

## Animation Craft, Procedural Motion & Advanced Interactions

- [Animation Craft, Procedural Motion & Advanced Interactions index](index-animation.md): Partial/CSS-variable `@keyframes`, standalone `translate`/`rotate`/`scale` properties, symmetrical/contained particle positioning, polar/trig dispersion, `normalize`/`clamp` interpolation, batched cleanup vs pooling, custom easing & juice, `hue-rotate()`, reduced-motion/opt-in controls, CSS `linear()` springs & library/compositor limits, purposeful hovers, button border scaling, boops & squash-and-stretch, jointed/staggered choreography, UI SFX, throttled pointer tracking & SVG `viewBox` mapping, CSS `animation-timeline`/`view()` scroll-driven animations & parallax, `IntersectionObserver`/`animation-trigger` reveals, same-document/cross-document/React View Transitions, interruptible typewriters, radial action menus, press-and-hold particle stages, and DOM `rAF` physics impulses. (24 practices; sections: Keyframes, Geometry & Interpolation; Performance, Juice, Color & Motion Accessibility; Springs, Interaction Design & Sound Effects; Pointer Tracking, Scroll & View Transitions; Challenge Interactions & Physics.)

## SVG Primitives, Coordinates, Masks & Animation

- [SVG Primitives, Coordinates, Masks & Animation index](index-svg.md): Inline SVG primitives/strokes/DOM stacking/`paint-order` text, `viewBox`/`preserveAspectRatio`/`non-scaling-stroke`, readable `<path>` commands & hand vs Figma workflows, `<defs>`/`<use>` reuse, SVG `transform-origin`/`transform-box: fill-box`, `stroke-dasharray`/`pathLength` self-drawing lines, `<mask>`/`<filter>`/`useId()` scoping, inverse-corner wedges, responsive SVG Bézier bridges, and CSS-only sun/moon toggles. (10 practices; sections: SVG Primitives, Coordinates & Paths; SVG Transforms, Masks & Filters; SVG UI Connectors, Corners & Toggles.)

## HTML Canvas, Particle Loops & Offscreen Workers

- [HTML Canvas, Particle Loops & Offscreen Workers index](index-canvas.md): Canvas vs SVG performance & accessibility tradeoffs, `devicePixelRatio`/responsive sizing & SVG data-URI images, `deltaTime`-capped `rAF` loops & `save()`/`restore()` transforms, semi-transparent trails, trig/Simplex noise (including retracting hover ripples), blurred glow layers & Safari-safe round-cap dots, `OffscreenCanvas` Web Workers, React `<Canvas>`/`useRequestAnimationFrameLoop` wrappers, and locked-drag Canvas cell painting with a decoupled simulation tick. (7 practices; sections: Canvas Setup, Loops & Tradeoffs; Generative Techniques, Workers & React.)
