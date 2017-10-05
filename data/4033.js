{
  const { stdout } = runJest("verbose_reporter", [
    "--config=" +
      JSON.stringify({
        testEnvironment: "node",
        watchman: false
      }),
    "--debug"
  ]);
  expect(stdout).toMatch('"watchman": false');
}
