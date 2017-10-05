{
  const reporterConfig = {
    reporters: ["<rootDir>/reporters/test_reporter.js"]
  };
  const { status } = runJest("custom_reporters", [
    "--config",
    JSON.stringify(reporterConfig),
    "add.test.js"
  ]);
  expect(status).toBe(0);
}
