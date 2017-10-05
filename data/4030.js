{
  const result = runJest("verbose_reporter", [
    "--config=" +
      JSON.stringify({
        testEnvironment: "node",
        testMatch: ["banana strawbery kiwi"]
      })
  ]);
  const stdout = result.stdout.toString();
  expect(result.status).toBe(0);
  expect(stdout).toMatch("No tests found");
}
