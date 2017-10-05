{
  const exports = runtime.requireMock(runtime.__mockRootPath, "ManuallyMocked");
  expect(exports.isManualMockModule).toBe(true);
}
