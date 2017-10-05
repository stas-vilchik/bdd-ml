{
  beforeEach(() => cleanup(snapshotsDir));
  afterEach(() => cleanup(snapshotsDir));
  it("renders snapshot", () => {
    runAndAssert();

    const snapshot = require(snapshotPath);

    expect(snapshot).toMatchSnapshot();
  });
  it("compares snapshots correctly", () => {
    runAndAssert();
    runAndAssert();
  });
}
