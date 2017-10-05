{
  const args = [
    "--coverage",
    "--coverageThreshold",
    '{"global": {"lines": 100}}',
    "--collectCoverageOnlyFrom",
    "cached-duplicates/a/identical.js",
    "--collectCoverageOnlyFrom",
    "cached-duplicates/b/identical.js",
    "--",
    "identical.test.js"
  ];
  runJest(DIR, args);
  const { stdout, status } = runJest(DIR, args);
  expect(stdout).toMatchSnapshot();
  expect(status).toBe(0);
}
