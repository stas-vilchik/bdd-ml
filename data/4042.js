{
  const { stdout } = runJest(DIR, [
    "--no-cache",
    "--coverage",
    "--collectCoverageFrom",
    "setup.js"
  ]);
  expect(stdout).toMatchSnapshot();
}
