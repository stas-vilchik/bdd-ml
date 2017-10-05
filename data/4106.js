{
  const { status, stdout } = runJest("list_tests", ["--listTests", "--json"]);
  expect(status).toBe(0);
  expect(() => JSON.parse(stdout)).not.toThrow();
  expect(
    JSON.stringify(
      JSON.parse(stdout)
        .map(normalizePaths)
        .sort()
    )
  ).toMatchSnapshot();
}
