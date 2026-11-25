> Full index: [index-react.md](index-react.md)

# Derive computed values during render instead of duplicating state

**When to use**: Whenever UI needs filtered lists, status maps, totals, win/loss flags, or resized slices computed from existing props or `useState`.

**Rule**: Store only the minimal raw source of truth in `useState` (for example, `guesses` and `answer` in a game, or the full `items` array plus a `visibleCount`) and compute derived views (`validatedGuesses`, keyboard letter statuses, `isWon`, `items.slice(0, visibleCount)`) directly as local variables during render. Keeping a single source of truth eliminates state-sync bugs and preserves user-entered entries when visibility counts shrink and grow again. Also hold mutable or future-dynamic values (such as a round's target answer) in state/props rather than static module exports so rounds can reset cleanly.

**Example**:
```jsx
function Game({ words }) {
  const [answer, setAnswer] = React.useState(() => sample(words));
  const [guesses, setGuesses] = React.useState([]);

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));
  const hasWon = guesses.includes(answer);
  const gameStatus = hasWon ? 'won' : guesses.length >= 6 ? 'lost' : 'playing';
  // ...
}
```

**Avoid**: Creating parallel `useState` variables (e.g., `gameStatus`, `letterStatuses`, `filteredItems`) synchronized manually in handlers or `useEffect`, or destructively truncating user-edited array items when a display count decreases.

**Source**: [Wordle Overview & Tips — Joy of React](https://courses.joshwcomeau.com/joy-of-react/project-wordle/04-overview), [Wordle Solution — Joy of React](https://courses.joshwcomeau.com/joy-of-react/project-wordle/06-solution), [Complex State Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/06.02-state-exercises)
