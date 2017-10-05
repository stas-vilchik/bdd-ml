{
  const { status, stdout } = runJest("list_tests", ["--listTests"]);
  expect(status).toBe(0);
  expect(
    normalizePaths(stdout)
      .split("\n")
      .sort()
      .join("\n")
  ).toMatchSnapshot();
}
