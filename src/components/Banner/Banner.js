import React from "react";

function Banner({ winning, guessTimes, answer }) {
  if (winning === null) return;

  return (
    <div className={`banner ${winning ? "happy" : "sad"}`}>
      {winning ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{guessTimes} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
