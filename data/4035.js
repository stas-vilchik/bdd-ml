{
  const { stderr, status } = runJest("console");
  const { summary, rest } = extractSummary(stderr);
  expect(status).toBe(0);
  expect(rest).toMatchSnapshot();
  expect(summary).toMatchSnapshot();
}
