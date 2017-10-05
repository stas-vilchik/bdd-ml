{
  const result = runJest("stack_trace", [
    "test_error.test.js",
    "--noStackTrace"
  ]);
  const stderr = result.stderr.toString();
  expect(extractSummary(stderr).summary).toMatchSnapshot();
  expect(result.status).toBe(1);
  expect(stderr).not.toMatch(
    /\s+at\s(?:.+?)\s\(__tests__\/test_error.test\.js/
  );
}
