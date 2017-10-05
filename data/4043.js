{
  const { stdout } = runJest(DIR, [
    "--no-cache",
    "--coverage",
    "--collectCoverageOnlyFrom",
    "sum.js",
    "--",
    "sum.test.js"
  ]);
  expect(stdout).toMatchSnapshot();
}
