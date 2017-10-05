{
  const result = runJest.json("test-in-root").json;
  expect(result.success).toBe(true);
  expect(result.numTotalTests).toBe(2);
  const testNames = result.testResults
    .map(res => res.name)
    .map(name => path.basename(name))
    .sort();
  expect(testNames.length).toBe(2);
  expect(testNames[0]).toBe("spec.js");
  expect(testNames[1]).toBe("test.js");
}
