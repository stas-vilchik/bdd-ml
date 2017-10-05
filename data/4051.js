{
  const reporterConfig = {
    reporters: [[3243242]]
  };
  const { status, stderr } = runJest("custom_reporters", [
    "--config",
    JSON.stringify(reporterConfig),
    "add.test.js"
  ]);
  expect(status).toBe(1);
  expect(stderr).toMatchSnapshot();
}
