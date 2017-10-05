{
  const { stderr, status } = runJest("stack_trace_no_captureStackTrace");
  expect(stderr).not.toMatch("Error.captureStackTrace is not a function");
  expect(status).toBe(1);
}
