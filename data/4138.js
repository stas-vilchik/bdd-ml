{
  beforeEach(() => {
    fs.writeFileSync(copyOfTestPath, originalTestContent);
  });
  it("does not save snapshots in CI mode by default", () => {
    const result = runJest.json("snapshot", ["-w=1", "--ci=true"]);
    expect(result.json.success).toBe(false);
    expect(result.json.numTotalTests).toBe(9);
    expect(result.json.snapshot.added).toBe(0);
    expect(result.json.snapshot.total).toBe(9);
    const { rest, summary } = extractSummary(result.stderr.toString());
    expect(rest).toMatch("New snapshot was not written");
    expect(summary).toMatchSnapshot();
  });
  it("works on subsequent runs without `-u`", () => {
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
  });
  it("deletes the snapshot if the test suite has been removed", () => {
    const firstRun = runJest.json("snapshot", ["-w=1", "--ci=false"]);
    fs.unlinkSync(copyOfTestPath);

    const content = require(snapshotOfCopy);

    expect(content).not.toBe(undefined);
    const secondRun = runJest.json("snapshot", ["-w=1", "--ci=false", "-u"]);
    expect(firstRun.json.numTotalTests).toBe(9);
    expect(secondRun.json.numTotalTests).toBe(5);
    expect(fileExists(snapshotOfCopy)).toBe(false);
    const infoFR = firstRun.stderr.toString();
    const infoSR = secondRun.stderr.toString();
    expect(infoFR).toMatch("9 snapshots written in 3 test suites");
    expect(infoSR).toMatch("1 obsolete snapshot file removed");
    expect(extractSummary(infoFR).summary).toMatchSnapshot();
    expect(extractSummary(infoSR).summary).toMatchSnapshot();
  });
  it("deletes a snapshot when a test does removes all the snapshots", () => {
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
  });
  it("updates the snapshot when a test removes some snapshots", () => {
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
  });
}
