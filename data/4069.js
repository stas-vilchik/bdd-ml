{
  let stderr;
  stderr = runJest(dir, ["throw_number.test.js"]).stderr;
  expect(extractSummary(stderr).rest).toMatchSnapshot();
  stderr = runJest(dir, ["throw_string.test.js"]).stderr;
  expect(extractSummary(stderr).rest).toMatchSnapshot();
  stderr = runJest(dir, ["throw_object.test.js"]).stderr;
  expect(extractSummary(stderr).rest).toMatchSnapshot();
  stderr = runJest(dir, ["assertion_count.test.js"]).stderr;
  expect(extractSummary(cleanupStackTrace(stderr)).rest).toMatchSnapshot();
}
