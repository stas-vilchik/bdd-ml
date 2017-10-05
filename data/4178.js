{
  const dir = path.resolve(__dirname, "..", "transform/no-babel-jest");
  const tempDir = path.resolve(os.tmpdir(), "transform-no-babel-jest");
  beforeEach(() => {
    cleanup(tempDir);
    createEmptyPackage(tempDir);
    copyDir(dir, tempDir);
    linkJestPackage("babel-jest", tempDir);
  });
  it("fails with syntax error on flow types", () => {
    const { stderr } = runJest(tempDir, ["--no-cache", "--no-watchman"]);
    expect(stderr).toMatch(/FAIL.*fails_with_syntax_error/);
    expect(stderr).toMatch("Unexpected token");
  });
  test("instrumentation with no babel-jest", () => {
    const { stdout } = runJest(tempDir, [
      "--no-cache",
      "--coverage",
      "--no-watchman"
    ]);
    expect(stdout).toMatch("covered.js");
    expect(stdout).not.toMatch("excluded_from_coverage.js");
    expect(stdout).toMatchSnapshot();
  });
}
