{
  const result = runJest("env-test");
  expect(result.status).toBe(0);
  expect(getLog(result)).toBe("NO WINDOW");
}
