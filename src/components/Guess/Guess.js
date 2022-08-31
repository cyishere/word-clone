import React, { Fragment } from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const columns = range(0, 5);

  return (
    <p className="guess">
      {columns.map((i) => (
        <Fragment key={i}>
          {guess?.length > 0 ? (
            <span className={`cell ${guess[i].status}`}>{guess[i].letter}</span>
          ) : (
            <span className="cell"></span>
          )}
        </Fragment>
      ))}
    </p>
  );
}

export default Guess;
