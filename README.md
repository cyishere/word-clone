# Word Game

This is an exerise project from the course [The Joy of React](https://www.joyofreact.com/). More infomation can be found at [the original repo](https://github.com/joy-of-react/word-clone).

The `main` branch is my solutions along with each seperate solution in its own branch.

## About the Solution

For me the most inspiration parts are:

1. Add an extra variable to store the next guess, this can help when we need to get the length of our target. Because before that component is re-rendered, when we still process that function, the "state" doesn't change.

```js
// components/Game/Game.js

const addGuess = (word) => {
  // ...

  // ❗ This is an IMPORTANT step
  const nextGuesses = [...guesses, guess];

  setGuesses(nextGuesses);

  setGuessTimes(nextGuesses.length);

  nextGuesses.length === NUM_OF_GUESSES_ALLOWED;
};
```

2. Make the `Banner` component re-usable. Although in this app, there' not much usage of `Banner`, the idea of making components re-usable is very important.
