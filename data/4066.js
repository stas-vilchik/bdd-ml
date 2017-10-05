{
  const result = runJest("env-test", ["--env=banana"]);
  expect(result.status).toBe(1);
}
