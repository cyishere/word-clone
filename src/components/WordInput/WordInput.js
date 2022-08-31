import React, { useState } from "react";

function WordInput() {
  const [word, setWord] = useState("");

  const addGuess = (e) => {
    e.preventDefault();

    if (word.length !== 5) {
      alert("The word has to have 5 charaters.");
      return;
    }

    console.log({ word });
    setWord("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={addGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default WordInput;
