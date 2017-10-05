{
  let exports = runtime.requireMock(__filename, "./test_root/RegularModule");
  exports.externalMutation = "test value";
  exports = runtime.requireMock(__filename, "./test_root/RegularModule");
  expect(exports.externalMutation).toBe("test value");
}
