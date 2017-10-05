{
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
}
