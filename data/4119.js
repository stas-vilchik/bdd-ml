{
  const { json } = runJest.json("runtime-internal-module-registry", []);
  expect(json.numTotalTests).toBe(1);
  expect(json.numPassedTests).toBe(1);
}
