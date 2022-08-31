import React, { useState } from "react";

function WordInput({ addGuess }) {
  const [word, setWord] = useState("");

  const submitGuess = (e) => {
    e.preventDefault();

    if (word.length !== 5) {
      alert("The word has to have 5 charaters.");
      return;
    }

    addGuess(word);
    setWord("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={submitGuess}>
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
