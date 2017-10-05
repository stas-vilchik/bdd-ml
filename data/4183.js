{
  const { json, stderr } = runJest.json(dir, ["--no-cache"]);
  expect(stderr).toMatch(/FAIL/);
  expect(stderr).toMatch(/instruments by setting.*global\.__INSTRUMENTED__/);
  expect(json.numTotalTests).toBe(2);
  expect(json.numPassedTests).toBe(1);
  expect(json.numFailedTests).toBe(1);
}
