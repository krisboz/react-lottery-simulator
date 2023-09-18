const measureExecutionTime = (callback) => {
  const startTime = performance.now();
  callback();
  const endTime = performance.now();
  const executionTime = endTime - startTime;
  console.log(`Execution time: ${executionTime}ms`);
};

export default measureExecutionTime;
