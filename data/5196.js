createRuntime(__filename).then(runtime => {
  const exports = runtime.requireModule(
    runtime.__mockRootPath,
    "./RegularModule"
  );
  expect(exports.isRealModule).toBe(true);
});
