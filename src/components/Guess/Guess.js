import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const columns = range(0, 5);

  return (
    <p className="guess">
      {columns.map((i) => (
        <span key={i} className="cell">
          {guess?.length > 0 ? guess[i] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
