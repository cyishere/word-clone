import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

function GuessResults({ guesses }) {
  const rows = range(0, NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {rows.map((i) => (
        <Guess key={i} guess={guesses.length > 0 ? guesses[i] : ""} />
      ))}
    </div>
  );
}

export default GuessResults;
