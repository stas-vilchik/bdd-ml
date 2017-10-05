{
  const cleanup = () => {
    [
      snapshotFile,
      secondSnapshotFile,
      snapshotOfCopy,
      copyOfTestPath,
      snapshotEscapeFile,
      snapshotEscapeRegexFile,
      snapshotEscapeSubstitutionFile
    ].forEach(file => {
      if (fileExists(file)) {
        fs.unlinkSync(file);
      }
    });

    if (fileExists(snapshotDir)) {
      fs.rmdirSync(snapshotDir);
    }

    if (fileExists(snapshotEscapeSnapshotDir)) {
      fs.rmdirSync(snapshotEscapeSnapshotDir);
    }

    fs.writeFileSync(snapshotEscapeTestFile, initialTestData, "utf8");
  };

  beforeEach(cleanup);
  afterAll(cleanup);
  it("stores new snapshots on the first run", () => {
    const result = runJest.json("snapshot", ["-w=1", "--ci=false"]);
    const json = result.json;
    expect(json.numTotalTests).toBe(5);
    expect(json.numPassedTests).toBe(5);
    expect(json.numFailedTests).toBe(0);
    expect(json.numPendingTests).toBe(0);
    expect(result.status).toBe(0);

    const content = require(snapshotFile);

    expect(
      content["snapshot is not influenced by previous counter 1"]
    ).not.toBe(undefined);
    const info = result.stderr.toString();
    expect(info).toMatch("5 snapshots written in 2 test suites");
    expect(extractSummary(info).summary).toMatchSnapshot();
  });
  it("works with escaped characters", () => {
    let result = runJest("snapshot-escape", [
      "-w=1",
      "--ci=false",
      "snapshot.test.js"
    ]);
    let stderr = result.stderr.toString();
    expect(stderr).toMatch("1 snapshot written");
    expect(result.status).toBe(0);
    expect(extractSummary(stderr).summary).toMatchSnapshot();
    const testData =
      `test('escape strings two', () => expect('two: \\\'\"').` +
      `toMatchSnapshot());`;
    const newTestData = initialTestData + testData;
    fs.writeFileSync(snapshotEscapeTestFile, newTestData, "utf8");
    result = runJest("snapshot-escape", [
      "-w=1",
      "--ci=false",
      "--updateSnapshot",
      "snapshot.test.js"
    ]);
    stderr = result.stderr.toString();
    expect(stderr).toMatch("1 snapshot written");
    expect(extractSummary(stderr).summary).toMatchSnapshot();
    expect(result.status).toBe(0);
    result = runJest("snapshot-escape", [
      "-w=1",
      "--ci=false",
      "snapshot.test.js"
    ]);
    stderr = result.stderr.toString();
    expect(stderr).not.toMatch("Snapshot Summary");
    expect(extractSummary(stderr).summary).toMatchSnapshot();
    expect(result.status).toBe(0);
  });
  it("works with escaped regex", () => {
    let result = runJest("snapshot-escape", [
      "-w=1",
      "--ci=false",
      "snapshot_escape_regex.js"
    ]);
    let stderr = result.stderr.toString();
    expect(stderr).toMatch("2 snapshots written in 1 test suite.");
    expect(result.status).toBe(0);
    expect(extractSummary(stderr).summary).toMatchSnapshot();
    result = runJest("snapshot-escape", [
      "-w=1",
      "--ci=false",
      "snapshot_escape_regex.js"
    ]);
    stderr = result.stderr.toString();
    expect(stderr).not.toMatch("Snapshot Summary");
    expect(extractSummary(stderr).summary).toMatchSnapshot();
    expect(result.status).toBe(0);
  });
  it("works with template literal subsitutions", () => {
    let result = runJest("snapshot-escape", [
      "-w=1",
      "--ci=false",
      "snapshot_escape_substitution.test.js"
    ]);
    let stderr = result.stderr.toString();
    expect(stderr).toMatch("1 snapshot written");
    expect(result.status).toBe(0);
    expect(extractSummary(stderr).summary).toMatchSnapshot();
    result = runJest("snapshot-escape", [
      "-w=1",
      "--ci=false",
      "snapshot_escape_substitution.test.js"
    ]);
    stderr = result.stderr.toString();
    expect(stderr).not.toMatch("1 snapshot written");
    expect(extractSummary(stderr).summary).toMatchSnapshot();
    expect(result.status).toBe(0);
  });
  describe("Validation", () => {
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
        originalTestContent.replace(
          ".toMatchSnapshot()",
          ".not.toBe(undefined)"
        )
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
  });
}
