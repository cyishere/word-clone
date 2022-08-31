import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import WordInput from "../WordInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner";
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

    setGuesses([...guesses, guess]);

    if (isWinning(guess)) {
      setWinning(true);
      setGuessTimes(guesses.length + 1);
    } else if (
      !isWinning(guess) &&
      guesses.length === NUM_OF_GUESSES_ALLOWED - 1
    ) {
      setWinning(false);
    }

    console.log({ guess });
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <WordInput addGuess={addGuess} />
      <Banner winning={winning} guessTimes={guessTimes} answer={answer} />
    </>
  );
}

export default Game;
