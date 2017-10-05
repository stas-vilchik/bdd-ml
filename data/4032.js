{
  const { stdout } = runJest("verbose_reporter", [
    "--env=node",
    "--watchman=false",
    "--debug"
  ]);
  expect(stdout).toMatch('"watchman": false');
}
