{
  const result = runJest("json_reporter", ["--json"]);
  const stdout = result.stdout.toString();
  const stderr = result.stderr.toString();
  let jsonResult;
  expect(stderr).toMatch(/1 failed, 2 passed/);
  expect(result.status).toBe(1);

  try {
    jsonResult = JSON.parse(stdout);
  } catch (err) {
    throw new Error("Can't parse the JSON result from stdout" + err.toString());
  }

  expect(jsonResult.numTotalTests).toBe(3);
  expect(jsonResult.numTotalTestSuites).toBe(1);
  expect(jsonResult.numRuntimeErrorTestSuites).toBe(0);
  expect(jsonResult.numPassedTests).toBe(2);
  expect(jsonResult.numFailedTests).toBe(1);
  expect(jsonResult.numPendingTests).toBe(0);
  const noAncestors = jsonResult.testResults[0].assertionResults.find(
    item => item.title == "no ancestors"
  );
  let expected = {
    ancestorTitles: []
  };
  expect(noAncestors).toEqual(expect.objectContaining(expected));
  const addsNumbers = jsonResult.testResults[0].assertionResults.find(
    item => item.title == "adds numbers"
  );
  expected = {
    ancestorTitles: ["sum"]
  };
  expect(addsNumbers).toEqual(expect.objectContaining(expected));
  const failsTheTest = jsonResult.testResults[0].assertionResults.find(
    item => item.title == "fails the test"
  );
  expected = {
    ancestorTitles: ["sum", "failing tests"]
  };
  expect(failsTheTest).toEqual(expect.objectContaining(expected));
}
