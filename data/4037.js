{
  const { stderr, stdout, status } = runJest("console", [
    "--config=" +
      JSON.stringify({
        testEnvironment: "node"
      }),
    "--silent",
    "--no-cache"
  ]);
  const { summary, rest } = extractSummary(stderr);
  expect(status).toBe(0);
  expect(stdout).toMatchSnapshot();
  expect(rest).toMatchSnapshot();
  expect(summary).toMatchSnapshot();
}
