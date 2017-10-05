createRuntime(__filename).then(runtime => {
  const exports = runtime.requireMock(runtime.__mockRootPath, "RegularModule");
  expect(exports.getModuleStateValue._isMockFunction).toBe(true);
});
