createRuntime(
  __filename,
  {},
  {
    browser: false
  }
).then(runtime => {
  const exports = runtime.requireModuleOrMock(
    runtime.__mockRootPath,
    "jest-resolve-test"
  );
  expect(exports.isBrowser).toBe(false);
});
