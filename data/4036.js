{
  const { stderr, stdout, status } = runJest("console", [
    "--verbose",
    "--no-cache"
  ]);
  const { summary, rest } = extractSummary(stderr);
  expect(status).toBe(0);
  expect(stdout).toMatchSnapshot();
  expect(rest).toMatchSnapshot();
  expect(summary).toMatchSnapshot();
}
