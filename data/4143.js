{
  const firstRun = runJest.json("snapshot", ["-w=1", "--ci=false"]);
  fs.writeFileSync(copyOfTestPath, emptyTest);
  const secondRun = runJest.json("snapshot", ["-w=1", "--ci=false", "-u"]);
  fs.unlinkSync(copyOfTestPath);
  expect(firstRun.json.numTotalTests).toBe(9);
  expect(secondRun.json.numTotalTests).toBe(6);
  expect(fileExists(snapshotOfCopy)).toBe(false);
  const infoFR = firstRun.stderr.toString();
  const infoSR = secondRun.stderr.toString();
  expect(infoFR).toMatch("9 snapshots written in 3 test suites");
  expect(infoSR).toMatch("1 obsolete snapshot file removed");
  expect(extractSummary(infoFR).summary).toMatchSnapshot();
  expect(extractSummary(infoSR).summary).toMatchSnapshot();
}
