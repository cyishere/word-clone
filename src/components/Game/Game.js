import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import WordInput from "../WordInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WinBanner from "../WinBanner";
import LostBanner from "../LostBanner";
import { checkGuess, isWinning } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [winning, setWinning] = useState(null);
  const [guessTimes, setGuessTimes] = useState(0);

  const addGuess = (word) => {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) return;

    const guess = checkGuess(word, answer);

    if (!guess) return;

    // ❗ This is an IMPORTANT step
    const nextGuesses = [...guesses, guess];

    setGuesses(nextGuesses);

    if (isWinning(guess)) {
      setWinning(true);
      setGuessTimes(nextGuesses.length);
    } else if (
      !isWinning(guess) &&
      nextGuesses.length === NUM_OF_GUESSES_ALLOWED
    ) {
      setWinning(false);
    }

    console.log({ guess });
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <WordInput addGuess={addGuess} />
      {winning && <WinBanner guessTimes={guessTimes} />}
      {winning === false && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
