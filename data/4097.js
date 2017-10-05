{
  let jsonResult;
  runJest("json_reporter", ["--json", `--outputFile=${outputFileName}`]);
  const testOutput = fs.readFileSync(outputFilePath, "utf8");

  try {
    jsonResult = JSON.parse(testOutput);
  } catch (err) {
    throw new Error(
      `Can't parse the JSON result from ${outputFileName}, ${err.toString()}`
    );
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
