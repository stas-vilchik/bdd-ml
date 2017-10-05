{
  const exports = runtime.requireModule(runtime.__mockRootPath, "./JSONFile");
  expect(exports.isJSONModule).toBe(true);
}
