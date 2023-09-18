import { useState, useEffect } from "react";
import { Switch } from "@mui/material";
import generateTicket from "../helpers/generateTicket";
import "../styles/SummarizedStats.css";
import ToggleSwitch from "./CustomSwitch";
import convertToPercentage from "../helpers/convertToPercentage";

const checkResults = (ticket, winningTicket) => {
  const commonNumbers = ticket.numbers.filter((number) =>
    winningTicket.numbers.includes(number)
  );
  const commonEuroNums = ticket.euroNums.filter((euroNum) =>
    winningTicket.euroNums.includes(euroNum)
  );

  const allCommonNumbers = {
    numbers: [...commonNumbers],
    euroNums: [...commonEuroNums],
  };

  return allCommonNumbers;
};

const SummarizedStats = ({ winningTicket, isRendering }) => {
  const [peopleResults, setPeopleResults] = useState({
    "5num2euronum": 0,
    "5num1euronum": 0,
    "5num0euronum": 0,
    "4num2euronum": 0,
    "4num1euronum": 0,
    "3num2euronum": 0,
    "4num0euronum": 0,
    "2num2euronum": 0,
    "3num1euronum": 0,
    "3num0euronum": 0,
    "1num2euronum": 0,
    "2num1euronum": 0,
    "2num0euronum": 0,
    "1num0euronum": 0,
    "0num0euronum": 0,
  });

  const [peopleResPercent, setPeopleResPercent] = useState();

  const [showPercentages, setShowPercentages] = useState(false);

  const handlePercentageRender = () => {
    setShowPercentages((prev) => !prev);
  };

  const updatePeopleResults = () => {
    if (winningTicket) {
      const stateCopy = { ...peopleResults };

      for (let i = 0; i < 100000; i++) {
        const ticket = generateTicket();
        const results = checkResults(ticket, winningTicket);

        const key = `${results.numbers.length}num${results.euroNums.length}euronum`;
        stateCopy[key] = stateCopy[key] + 1 || 1;
      }

      setPeopleResults(stateCopy);
    }
  };

  useEffect(() => {
    if (!isRendering) {
      updatePeopleResults();
    }
  }, [winningTicket, isRendering]);

  const returnNumeralStats = () => {
    return Object.entries(peopleResults)
      .reverse()
      .map(([combination, count]) => {
        // Parse the combination name
        const [numCount, euroCount] = combination.split("num");
        const numLabel = numCount === "0" ? "Numbers" : "Number";
        const euroLabel = euroCount === "0" ? "Euro Numbers" : "Euro Number";

        // Format the combination name
        const formattedCombination = `${numCount}  + ${euroCount.replace(
          /\D/g,
          ""
        )}  `;

        return (
          <tr key={combination}>
            <td>{formattedCombination}</td>
            <td>{count}</td>
          </tr>
        );
      });
  };

  const returnPercentStats = () => {
    return Object.entries(convertToPercentage(peopleResults))
      .reverse()
      .map(([combination, count]) => {
        // Parse the combination name
        const [numCount, euroCount] = combination.split("num");
        const numLabel = numCount === "0" ? "Numbers" : "Number";
        const euroLabel = euroCount === "0" ? "Euro Numbers" : "Euro Number";

        // Format the combination name
        const formattedCombination = `${numCount}  + ${euroCount.replace(
          /\D/g,
          ""
        )} `;

        return (
          <tr key={combination}>
            <td>{formattedCombination}</td>
            <td>{count}</td>
          </tr>
        );
      });
  };

  return (
    <div className="summarized-stats-container">
      <div>
        <ToggleSwitch
          checked={showPercentages}
          handleClick={handlePercentageRender}
        />
      </div>
      <table>
        <tbody>
          {showPercentages ? returnNumeralStats() : returnPercentStats()}
        </tbody>
      </table>
    </div>
  );
};

export default SummarizedStats;
