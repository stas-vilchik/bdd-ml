{
  const result = runJest("env-test", ["--env=node"]);
  expect(result.status).toBe(0);
  expect(getLog(result)).toBe("NO WINDOW");
}
