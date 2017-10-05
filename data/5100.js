createRuntime(__filename, {
  moduleDirectories
}).then(runtime => {
  const exports = runtime.requireModule(runtime.__mockRootPath, "my-module");
  expect(exports.isNodeModule).toEqual(true);
});
