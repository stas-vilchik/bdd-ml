{
  if (process.versions.node < "7.6.0") {
    return;
  }

  if (process.platform !== "win32") {
    run("yarn", dir);
  }

  const { stderr } = runJest(dir, ["--no-cache"]);
  expect(extractSummary(stderr).summary).toMatch(
    "Test Suites: 1 passed, 1 total"
  );
}
