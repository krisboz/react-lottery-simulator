import React, { useState, useEffect } from "react";
import "../styles/JackpotDisplay.css";

const JackpotDisplay = ({ jackpot }) => {
  const [currentJackpot, setCurrentJackpot] = useState(jackpot);
  const [targetJackpot, setTargetJackpot] = useState(jackpot);
  const incrementAmount = 2_500_000;
  const jackpotCap = 120_000_000;
  const intervalDuration = 10;

  useEffect(() => {
    if (jackpot > currentJackpot) {
      setTargetJackpot(jackpot);
    }
  }, [jackpot]);

  useEffect(() => {
    if (currentJackpot < targetJackpot) {
      const interval = setInterval(() => {
        setCurrentJackpot((prevJackpot) =>
          Math.min(prevJackpot + incrementAmount, targetJackpot)
        );
      }, intervalDuration);

      return () => clearInterval(interval);
    }
  }, [currentJackpot, targetJackpot, incrementAmount]);

  return (
    <div className="jackpot-display2">
      <p className="jackpot-announcer">Jackpot</p>
      <p className="jackpot-number2">€ {currentJackpot.toLocaleString()}</p>
    </div>
  );
};

export default JackpotDisplay;
