import React, { Fragment } from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess, answer }) {
  const columns = range(0, 5);

  const checkedGuess = checkGuess(guess, answer);

  return (
    <p className="guess">
      {columns.map((i) => (
        <Fragment key={i}>
          {checkedGuess ? (
            <span className={`cell ${checkedGuess[i].status}`}>
              {checkedGuess[i].letter}
            </span>
          ) : (
            <span className="cell"></span>
          )}
        </Fragment>
      ))}
    </p>
  );
}

export default Guess;
