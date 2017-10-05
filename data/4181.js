{
  const { stdout } = runJest(tempDir, [
    "--no-cache",
    "--coverage",
    "--no-watchman"
  ]);
  expect(stdout).toMatch("covered.js");
  expect(stdout).not.toMatch("excluded_from_coverage.js");
  expect(stdout).toMatchSnapshot();
}
