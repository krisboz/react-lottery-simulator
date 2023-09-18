const generateTicket = () => {
  const getRandomNumbers = (min, max, count) => {
    const numbers = [];
    while (numbers.length < count) {
      const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    return numbers;
  };

  const ticket = {
    numbers: getRandomNumbers(1, 50, 5),
    euroNums: getRandomNumbers(1, 12, 2),
  };

  return ticket;
};

export default generateTicket;
