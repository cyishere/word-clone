import React from "react";
import Banner from "../Banner";

function WinBanner({ guessTimes }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{guessTimes} guesses</strong>.
      </p>
    </Banner>
  );
}

export default WinBanner;
