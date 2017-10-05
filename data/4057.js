{
  skipOnWindows.suite();
  const dir = path.resolve(__dirname, "..", "verbose_reporter");
  it("outputs debugging info before running the test", () => {
    const { stdout } = runJest(dir, ["--debug", "--no-cache"]);
    expect(stdout).toMatch('"version": "');
    expect(stdout).toMatch('"configs": [');
  });
}
