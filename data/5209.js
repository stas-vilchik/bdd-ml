{
  const exports = runtime.requireModule(
    runtime.__mockRootPath,
    "./JSONFile.json"
  );
  expect(exports.isJSONModule).toBe(true);
}
