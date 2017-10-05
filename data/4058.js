{
  const { stdout } = runJest(dir, ["--debug", "--no-cache"]);
  expect(stdout).toMatch('"version": "');
  expect(stdout).toMatch('"configs": [');
}
