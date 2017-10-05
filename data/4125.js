{
  const result = runJest.json("snapshot-serializers", [
    "-w=1",
    "--ci=false",
    "--no-cache"
  ]);
  const json = result.json;
  expect(json.numTotalTests).toBe(7);
  expect(json.numPassedTests).toBe(7);
  expect(json.numFailedTests).toBe(0);
  expect(json.numPendingTests).toBe(0);
  expect(result.status).toBe(0);
}
