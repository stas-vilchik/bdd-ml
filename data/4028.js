{
  const { json } = runJest.json(DIR, ["--no-cache", "--coverage"]);
  expect(json.success).toBe(true);
  expect(json.numTotalTestSuites).toBe(2);
}
