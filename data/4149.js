{
  const result = runJest("stack_trace", ["stack_trace.test.js"]);
  const stderr = result.stderr.toString();
  expect(extractSummary(stderr).summary).toMatchSnapshot();
  expect(result.status).toBe(1);
  expect(stderr).toMatch(/\s+at\s(?:.+?)\s\(__tests__\/stack_trace.test\.js/);
}
