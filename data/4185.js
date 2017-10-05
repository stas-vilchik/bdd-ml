{
  const dir = path.resolve(__dirname, "..", "transform/multiple-transformers");
  beforeEach(() => {
    if (process.platform !== "win32") {
      run("yarn", dir);
    }
  });
  it("transforms dependencies using specific transformers", () => {
    const { json, stderr } = runJest.json(dir, ["--no-cache"]);
    expect(stderr).toMatch(/PASS/);
    expect(json.numTotalTests).toBe(1);
    expect(json.numPassedTests).toBe(1);
  });
}
