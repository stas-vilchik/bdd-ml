{
  const { json } = runJest.json("regex-(char-in-path", []);
  expect(json.numTotalTests).toBe(1);
  expect(json.numPassedTests).toBe(1);
}
