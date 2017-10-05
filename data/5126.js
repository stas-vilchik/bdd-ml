{
  const exports = runtime.requireMock(runtime.__mockRootPath, "ManuallyMocked");
  expect(exports.onlyRequiredFromMockModuleValue).toBe("banana banana banana");
}
