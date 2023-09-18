const fisherYatesGenTicket = () => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const getRandomNumbers = (min, max, count) => {
    const numbers = Array.from(
      { length: max - min + 1 },
      (_, index) => index + min
    );
    const shuffledNumbers = shuffleArray(numbers);
    return shuffledNumbers.slice(0, count);
  };

  const ticket = {
    numbers: getRandomNumbers(1, 50, 5),
    euroNumbers: getRandomNumbers(1, 12, 2),
  };

  return ticket;
};

export default fisherYatesGenTicket;
