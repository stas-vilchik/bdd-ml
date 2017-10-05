createRuntime(__filename).then(runtime => {
  let exports = runtime.requireMock(runtime.__mockRootPath, "RegularModule");
  exports.externalMutation = "test value";
  exports = runtime.requireMock(runtime.__mockRootPath, "RegularModule");
  expect(exports.externalMutation).toBe("test value");
});
