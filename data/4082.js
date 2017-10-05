{
  const result = runJest.json("jasmine_async", ["promise_before_each.test.js"]);
  const json = result.json;
  expect(json.numTotalTests).toBe(3);
  expect(json.numPassedTests).toBe(1);
  expect(json.numFailedTests).toBe(2);
  expect(json.numPendingTests).toBe(0);
  const { message } = json.testResults[0];
  expect(message).toMatch("done - with error thrown");
  expect(message).toMatch("done - with error called back");
}
