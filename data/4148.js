{
  const result = runJest("stack_trace", [
    "runtime_error.test.js",
    "--noStackTrace"
  ]);
  const stderr = result.stderr.toString();
  expect(extractSummary(stderr).summary).toMatchSnapshot();
  expect(result.status).toBe(1);
  expect(stderr).toMatch(/ReferenceError: thisIsARuntimeError is not defined/);
  expect(stderr).not.toMatch(
    /\s+at\s(?:.+?)\s\(__tests__\/runtime_error.test\.js/
  );
}
