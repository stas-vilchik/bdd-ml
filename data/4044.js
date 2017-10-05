{
  const { stderr, status } = runJest("json_reporter", ["--coverage"]);
  const { summary } = extractSummary(stderr);
  expect(status).toBe(1);
  expect(summary).toMatchSnapshot();
}
