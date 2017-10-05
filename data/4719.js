{
  if (!error) {
    reject(result);
    return;
  }

  expect(error.message).toMatch("Failed to collect coverage from banana.js");
  expect(result).toEqual(undefined);
  resolve();
}
