{
  const result = runJest("env-test", ["--env=jsdom"]);
  expect(result.status).toBe(0);
  expect(getLog(result)).toBe("WINDOW");
}
