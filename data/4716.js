{
  expect.assertions(2);
  generateEmptyCoverage.mockImplementation(() => {
    throw new Error("SyntaxError");
  });
  return new Promise((resolve, reject) => {
    worker(workerOptions, (error, result) => {
      if (!error) {
        reject(result);
        return;
      }

      expect(error.message).toMatch(
        "Failed to collect coverage from banana.js"
      );
      expect(result).toEqual(undefined);
      resolve();
    });
  });
}
