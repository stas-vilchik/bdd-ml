{
  const firstRun = runJest.json("snapshot", ["-w=1", "--ci=false"]);
  fs.unlinkSync(copyOfTestPath);
  const beforeRemovingSnapshot = getSnapshotOfCopy();
  fs.writeFileSync(
    copyOfTestPath,
    originalTestContent.replace(".toMatchSnapshot()", ".not.toBe(undefined)")
  );
  const secondRun = runJest.json("snapshot", ["-w=1", "--ci=false", "-u"]);
  fs.unlinkSync(copyOfTestPath);
  expect(firstRun.json.numTotalTests).toBe(9);
  expect(secondRun.json.numTotalTests).toBe(9);
  expect(fileExists(snapshotOfCopy)).toBe(true);
  const afterRemovingSnapshot = getSnapshotOfCopy();
  expect(Object.keys(beforeRemovingSnapshot).length - 1).toBe(
    Object.keys(afterRemovingSnapshot).length
  );
  const keyToCheck =
    "snapshot works with plain objects and the " +
    "title has `escape` characters 2";
  expect(beforeRemovingSnapshot[keyToCheck]).not.toBe(undefined);
  expect(afterRemovingSnapshot[keyToCheck]).toBe(undefined);
  const infoFR = firstRun.stderr.toString();
  const infoSR = secondRun.stderr.toString();
  expect(infoFR).toMatch("9 snapshots written in 3 test suites");
  expect(extractSummary(infoFR).summary).toMatchSnapshot();
  expect(infoSR).toMatch("1 snapshot updated in 1 test suite");
  expect(infoSR).toMatch("1 obsolete snapshot removed");
  expect(extractSummary(infoSR).summary).toMatchSnapshot();
}
