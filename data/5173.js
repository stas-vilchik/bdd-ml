{
  const exports = runtime.requireModuleOrMock(
    runtime.__mockRootPath,
    "ManuallyMocked"
  );
  expect(exports.isManualMockModule).toBe(true);
}
