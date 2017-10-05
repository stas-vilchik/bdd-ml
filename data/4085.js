{
  const result = runJest.json("jasmine_async", ["promise_fit.test.js"]);
  const json = result.json;
  expect(json.numTotalTests).toBe(3);
  expect(json.numPassedTests).toBe(1);
  expect(json.numFailedTests).toBe(1);
  expect(json.numPendingTests).toBe(1);
  expect(json.testResults[0].message).toMatch(/will run and fail/);
}
