{
  const { stderr, stdout, status } = runJest("custom_reporters", [
    "--no-cache",
    "--config",
    JSON.stringify({
      reporters: ["<rootDir>/reporters/incomplete_reporter.js"]
    }),
    "add.test.js"
  ]);
  expect(status).toBe(0);
  expect(stderr.trim()).toBe("");
  expect(stdout).toMatchSnapshot();
}
