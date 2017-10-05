createRuntime(__filename, {
  browser: true
}).then(runtime => {
  const exports = runtime.requireModuleOrMock(
    runtime.__mockRootPath,
    "jest-resolve-test"
  );
  expect(exports.isBrowser).toBe(true);
});
