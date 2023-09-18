const calcWinnings = (jackpot, numbers, euroNums) => {
  const winningPercentages = {
    "5num 2euronum": 100,
    "5num 1euronum": 2.8,
    "5num 0euronum": 0.53,
    "4num 2euronum": 0.016,
    "4num 1euronum": 0.0009,
    "3num 2euronum": 0.00046,
    "4num 0euronum": 0.00032,
    "2num 2euronum": 0.000074,
    "3num 1euronum": 0.000057,
    "3num 0euronum": 0.000049,
    "1num 2euronum": 0.000037,
    "2num 1euronum": 0.000029,
  };

  if (numbers && euroNums) {
    const key = `${numbers.length}num ${euroNums.length}euronum`;

    //check if the user won anything based on winningPercentages
    if (winningPercentages.hasOwnProperty(key)) {
      const percentage = winningPercentages[key];
      const winnings = (jackpot * percentage) / 100;
      return winnings.toFixed(2);
    }
    //If not then just return 0
    return 0;
  }
};

export default calcWinnings;
