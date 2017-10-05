{
  const { stderr, status } = runJest.json("testNamePattern", [
    "--testNamePattern",
    "should match"
  ]);
  const { summary } = extractSummary(stderr);
  expect(status).toBe(0);
  expect(summary).toMatchSnapshot();
}
