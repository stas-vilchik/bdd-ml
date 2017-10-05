{
  const result = runJest("verbose_reporter");
  const stderr = result.stderr.toString();
  expect(result.status).toBe(1);
  expect(stderr).toMatch("works just fine");
  expect(stderr).toMatch("does not work");
  expect(stderr).toMatch(/Verbose\n.*?works/);
}
