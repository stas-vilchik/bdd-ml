{
  const result = runJest.json("jasmine_async", ["promise_xit.test.js"]);
  const json = result.json;
  expect(json.numTotalTests).toBe(2);
  expect(json.numPassedTests).toBe(1);
  expect(json.numFailedTests).toBe(0);
  expect(json.numPendingTests).toBe(1);
}
