{
  const exports = runtime.requireModule(
    runtime.__mockRootPath,
    "./RegularModule.js"
  );
  expect(exports.isRealModule).toBe(true);
}
