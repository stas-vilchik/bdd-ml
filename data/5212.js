createRuntime(__filename).then(runtime => {
  const exports = runtime.requireModule(
    runtime.__mockRootPath,
    "ExclusivelyManualMock"
  );
  expect(exports.isExclusivelyManualMockModule).toBe(true);
});
