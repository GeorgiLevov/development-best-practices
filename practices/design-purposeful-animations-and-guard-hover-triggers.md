> Full index: [index-animation.md](index-animation.md)

# Design animations around clear intent, reserve tangible hovers for interactive controls, and persist onboarding state safely

**When to use**: When deciding *why* an element animates, whether to add a hover transition, or whether to gate a "first-time" entrance animation.

**Rule**: Assign every animation an explicit role—*tangible* (tactile real-world cues), *attention-focusing* (feedback/alerts), *explanatory/narrative* (showing cause-and-effect), or *procedural novelty* (*Stop Drawing Dead Fish* interactivity rather than static video loops)—and unify ~80% of UI motion on consistent patterns rather than one-off gimmicks. **Never put purely tangible hover animations on non-interactive elements** like static skill badges or plain images (users expect clickable affordances; only animate non-interactive elements on hover when the motion actively demonstrates how a product works). Never gate essential state or meaning behind `:hover` (invisible to touch and keyboard users). When running one-time onboarding/welcome animations, avoid `localStorage` if cross-device consistency or GDPR compliance matters—persist a user preference flag in your database instead.

**Example**:
```css
/* Interactive button/link receives tactile hover; static logo card does not */
.action-card[href]:hover .arrow,
.action-card[href]:focus-visible .arrow {
  transform: translateX(4px);
}
```

**Avoid**: Making static portfolio logos bounce/scale on hover, relying on hover-only tooltips for essential info, or trusting `localStorage` as durable per-user first-visit state.

**Source**: [Animation Categories — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-design/01-categories), [The Big Mistake — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-design/01.01-biggest-mistake), [Hover Transitions — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-design/02-hover-transitions), [Personalized Animations — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-design/03.06-personalized-animations), [Stop Drawing Dead Fish — Bret Victor](https://www.youtube.com/watch?v=ZfytHvgHybA)
