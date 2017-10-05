{
  const { stdout } = runJest(dir, ["--coverage", "--no-cache"]);
  expect(stdout).toMatch("covered.js");
  expect(stdout).not.toMatch("not_covered.js");
  expect(stdout).not.toMatch("excluded_from_coverage.js");
  expect(stdout).toMatchSnapshot();
}
