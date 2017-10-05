{
  const firstRun = runJest.json("snapshot", ["-w=1", "--ci=false"]);

  const content = require(snapshotOfCopy);

  expect(content).not.toBe(undefined);
  const secondRun = runJest.json("snapshot", []);
  expect(firstRun.json.numTotalTests).toBe(9);
  expect(secondRun.json.numTotalTests).toBe(9);
  expect(secondRun.json.success).toBe(true);
  const infoFR = firstRun.stderr.toString();
  const infoSR = secondRun.stderr.toString();
  expect(infoFR).toMatch("9 snapshots written in 3 test suites");
  expect(infoSR).toMatch("9 passed, 9 total");
  expect(extractSummary(infoFR).summary).toMatchSnapshot();
  expect(extractSummary(infoSR).summary).toMatchSnapshot();
}
