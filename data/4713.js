{
  expect.assertions(2);
  const validJS = "function(){}";
  fs.readFileSync.mockImplementation(() => validJS);
  generateEmptyCoverage.mockImplementation(() => 42);
  return new Promise((resolve, reject) => {
    worker(workerOptions, (error, result) => {
      if (error) {
        reject(error);
        return;
      }

      expect(generateEmptyCoverage).toBeCalledWith(
        validJS,
        "banana.js",
        globalConfig,
        config
      );
      expect(result).toEqual(42);
      resolve();
    });
  });
}
