{
  const reporterConfig = {
    reporters: [
      [
        "<rootDir>/reporters/test_reporter.js",
        {
          "Dmitrii Abramov": "Awesome"
        }
      ]
    ]
  };
  const { status, stdout } = runJest("custom_reporters", [
    "--config",
    JSON.stringify(reporterConfig),
    "add.test.js"
  ]);
  expect(stdout).toMatchSnapshot();
  expect(status).toBe(0);
}
