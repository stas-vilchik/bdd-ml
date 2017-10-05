createRuntime(__filename, {
  moduleNameMapper
}).then(runtime => {
  const root = runtime.requireModule(runtime.__mockRootPath);
  root.jest.disableAutomock();
  const exports = runtime.requireModuleOrMock(
    runtime.__mockRootPath,
    "RegularModule"
  );
  expect(exports.isRealModule).toBe(true);
});
