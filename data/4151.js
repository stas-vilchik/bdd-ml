{
  const result = runJest("stack_trace", ["test_error.test.js"]);
  const stderr = result.stderr.toString();
  expect(extractSummary(stderr).summary).toMatchSnapshot();
  expect(result.status).toBe(1);
  expect(stderr).toMatch(/this is unexpected\./);
  expect(stderr).toMatch(/this is a string\. thrown/);
  expect(stderr).toMatch(/\s+at\s(?:.+?)\s\(__tests__\/test_error.test\.js/);
  expect(stderr).toMatch(
    /Cannot find module 'this-module-does-not-exist' from 'test_error.test\.js'/
  );
  expect(stderr).toMatch(
    /\s+at\s(?:.+?)\s\((?:.+?)jest-resolve\/build\/index\.js/
  );
}
