{
  const result = runJest.json("jasmine_async", ["promise_it.test.js"]);
  const json = result.json;
  const message = json.testResults[0].message;
  expect(json.numTotalTests).toBe(16);
  expect(json.numPassedTests).toBe(6);
  expect(json.numFailedTests).toBe(9);
  expect(message).toMatch("fails if promise is rejected");
  expect(message).toMatch("works with done.fail");
  expect(message).toMatch("works with done(error)");
  expect(message).toMatch("fails if failed expectation with done");
  expect(message).toMatch("fails if failed expectation with done - async");
  expect(message).toMatch("fails with thrown error with done - sync");
  expect(message).toMatch("fails with thrown error with done - async");
  expect(message).toMatch("fails a sync test");
  expect(message).toMatch("fails if a custom timeout is exceeded");
}
