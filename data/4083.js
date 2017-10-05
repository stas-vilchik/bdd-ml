{
  const result = runJest.json("jasmine_async", ["promise_after_all.test.js"]);
  const json = result.json;
  expect(json.numTotalTests).toBe(2);
  expect(json.numPassedTests).toBe(2);
  expect(json.numFailedTests).toBe(0);
  expect(json.numPendingTests).toBe(0);
  expect(json.testResults[0].message).toBe("");
  expect((result.stderr.match(/unset flag/g) || []).length).toBe(1);
}
