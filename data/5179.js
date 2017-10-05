{
  const exports = runtime.requireModuleOrMock(
    runtime.__mockRootPath,
    "RegularModule"
  );
  expect(exports.setModuleStateValue._isMockFunction).toBe(undefined);
}
