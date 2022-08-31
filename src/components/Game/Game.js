import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import WordInput from "../WordInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const addGuess = (word) => {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) return;

    setGuesses([...guesses, word]);
    console.log({ word });
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <WordInput addGuess={addGuess} />
    </>
  );
}

export default Game;
