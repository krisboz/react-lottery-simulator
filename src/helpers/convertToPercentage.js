const calculatePercentage = (count, total) => {
  return ((count / total) * 100).toFixed(2); // Calculate the percentage and round to 2 decimal places
};

const convertToPercentage = (peopleResults) => {
  const totalPeople = Object.values(peopleResults).reduce(
    (acc, count) => acc + count,
    0
  );

  const percentageResults = Object.keys(peopleResults).reduce((acc, key) => {
    const count = peopleResults[key];
    const percentage = calculatePercentage(count, totalPeople);
    acc[key] = percentage;
    return acc;
  }, {});

  return percentageResults;
};

export default convertToPercentage;
