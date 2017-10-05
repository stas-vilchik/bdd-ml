createRuntime(__filename, {
  automock: true,
  moduleNameMapper
}).then(runtime => {
  const exports = runtime.requireModuleOrMock(
    runtime.__mockRootPath,
    "RegularModule"
  );
  expect(exports.setModuleStateValue._isMockFunction).toBe(true);
});
