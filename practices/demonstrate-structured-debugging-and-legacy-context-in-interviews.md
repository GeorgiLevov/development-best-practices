> Full index: [index-career-and-tooling.md](index-career-and-tooling.md)

# Narrate structured problem-solving in technical interviews and recognize legacy React screeners

**When to use**: When preparing for or taking live coding challenges, take-home exercises, and HR/phone technical screens.

**Rule**: Treat interview challenges as collaborative engineering rather than silent pass/fail tests: clarify constraints, break problems into small verifiable steps, narrate hypotheses out loud, check edge cases (strict-mode remounts, async fetch races, controlled vs reducer state, click-outside cleanup), and use interviewer hints constructively—you can fail to finish a hard challenge and still pass by demonstrating clear debugging. Also prepare for dated HR phone-screen answer keys by knowing historical React concepts (Presentational vs Container components, Higher-Order Components, Render Props, class lifecycles like `componentDidMount`/`componentDidCatch`, and retired SyntheticEvent pooling) while recommending modern hooks in new code.

**Example**:
```text
Live coding cadence:
1. Restate acceptance criteria & ask 1-2 clarifying edge-case questions
2. Build the smallest working slice first (static UI -> state -> edge cases/cleanup)
3. Think aloud when stuck; test hypotheses quickly in the console/UI
```

**Avoid**: Coding in silence for 20 minutes while stuck, treating "no third-party libs" hints rigidly during solo practice, or adopting legacy HOCs/render-props in modern codebases just because screeners ask about them.

**Source**: [Technical Interviews & Challenges — Joy of React](https://courses.joshwcomeau.com/joy-of-react/bonus-job-hunting-kit/04-technical-interviews), [Interview-Style Challenges — Joy of React](https://courses.joshwcomeau.com/joy-of-react/bonus-job-hunting-kit/05-interview-challenges), [Retro Questions — Joy of React](https://courses.joshwcomeau.com/joy-of-react/bonus-job-hunting-kit/06-retro-questions), [Component — React Docs](https://react.dev/reference/react/Component)
