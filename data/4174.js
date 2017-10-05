{
  skipOnWindows.suite();
  const dir = path.resolve(__dirname, "..", "transform/babel-jest");
  beforeEach(() => {
    if (process.platform !== "win32") {
      run("yarn", dir);
    }
  });
  it("runs transpiled code", () => {
    const { json } = runJest.json(dir, ["--no-cache"]);
    expect(json.success).toBe(true);
    expect(json.numTotalTests).toBeGreaterThanOrEqual(1);
  });
  it("instruments only specific files and collects coverage", () => {
    const { stdout } = runJest(dir, ["--coverage", "--no-cache"]);
    expect(stdout).toMatch("covered.js");
    expect(stdout).not.toMatch("not_covered.js");
    expect(stdout).not.toMatch("excluded_from_coverage.js");
    expect(stdout).toMatchSnapshot();
  });
}
