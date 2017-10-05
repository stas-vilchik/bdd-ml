createRuntime(__filename, {
  automock: true,
  moduleNameMapper
}).then(runtime => {
  const exports = runtime.requireModuleOrMock(
    runtime.__mockRootPath,
    "ManuallyMocked"
  );
  expect(exports.isManualMockModule).toBe(true);
});
