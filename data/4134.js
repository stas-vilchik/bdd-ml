{
  const result = runJest.json("snapshot", ["-w=1", "--ci=false"]);
  const json = result.json;
  expect(json.numTotalTests).toBe(5);
  expect(json.numPassedTests).toBe(5);
  expect(json.numFailedTests).toBe(0);
  expect(json.numPendingTests).toBe(0);
  expect(result.status).toBe(0);

  const content = require(snapshotFile);

  expect(content["snapshot is not influenced by previous counter 1"]).not.toBe(
    undefined
  );
  const info = result.stderr.toString();
  expect(info).toMatch("5 snapshots written in 2 test suites");
  expect(extractSummary(info).summary).toMatchSnapshot();
}
