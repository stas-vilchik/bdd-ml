{
  const { stderr, stdout, status } = runJest("custom_reporters", [
    "--config",
    JSON.stringify({
      reporters: ["default", "<rootDir>/reporters/test_reporter.js"]
    }),
    "add.test.js"
  ]);
  const { summary, rest } = extractSummary(stderr);
  const parsedJSON = JSON.parse(stdout);
  expect(status).toBe(0);
  expect(rest).toMatchSnapshot();
  expect(summary).toMatchSnapshot();
  expect(parsedJSON).toMatchSnapshot();
}
