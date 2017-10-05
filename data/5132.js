{
  const exports = runtime.requireMock(__filename, "./test_root/RegularModule");
  expect(exports.getModuleStateValue._isMockFunction).toBe(true);
}
