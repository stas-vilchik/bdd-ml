createRuntime(__filename).then(runtime => {
  let exports = runtime.requireMock(runtime.__mockRootPath, "ManuallyMocked");
  exports.setModuleStateValue("test value");
  exports = runtime.requireMock(runtime.__mockRootPath, "ManuallyMocked");
  expect(exports.getModuleStateValue()).toBe("test value");
});
