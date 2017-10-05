{
  const result = runJest("set_immediate", ["--verbose"]);
  const stderr = result.stderr.toString();
  expect(stderr).toMatch("setImmediate test");
  expect(result.status).toBe(0);
}
