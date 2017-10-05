{
  const { json } = runJest.json(dir, ["--no-cache"]);
  expect(json.success).toBe(true);
  expect(json.numTotalTests).toBeGreaterThanOrEqual(1);
}
