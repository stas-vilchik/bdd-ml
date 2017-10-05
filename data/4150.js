{
  const result = runJest("stack_trace", [
    "stack_trace.test.js",
    "--noStackTrace"
  ]);
  const stderr = result.stderr.toString();
  expect(extractSummary(stderr).summary).toMatchSnapshot();
  expect(result.status).toBe(1);
  expect(stderr).not.toMatch(
    /\s+at\s(?:.+?)\s\(__tests__\/stack_trace.test\.js/
  );
}
