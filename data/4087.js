{
  const result = runJest.json("jasmine_async", ["returning_values.test.js"]);
  const json = result.json;
  expect(json.numTotalTests).toBe(11);
  expect(json.numPassedTests).toBe(0);
  expect(json.numFailedTests).toBe(11);
  expect(json.numPendingTests).toBe(0);
}
