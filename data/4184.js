{
  const { stdout, status } = runJest(dir, ["--no-cache", "--coverage"]);
  expect(stdout).toMatchSnapshot();
  expect(status).toBe(0);
}
