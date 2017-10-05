{
  const { json, stderr } = runJest.json(dir, ["--no-cache"]);
  expect(stderr).toMatch(/PASS/);
  expect(json.numTotalTests).toBe(1);
  expect(json.numPassedTests).toBe(1);
}
