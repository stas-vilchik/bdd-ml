{
  const result = runJest("verbose_reporter", [
    "--config=" +
      JSON.stringify({
        testEnvironment: "node"
      })
  ]);
  const stderr = result.stderr.toString();
  expect(result.status).toBe(1);
  expect(stderr).toMatch("works just fine");
}
