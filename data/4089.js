{
  const result = runJest.json("jasmine_async", ["concurrent.test.js"]);
  const json = result.json;
  expect(json.numTotalTests).toBe(4);
  expect(json.numPassedTests).toBe(2);
  expect(json.numFailedTests).toBe(1);
  expect(json.numPendingTests).toBe(1);
  expect(json.testResults[0].message).toMatch(/concurrent test fails/);
}
