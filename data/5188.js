createRuntime(__filename).then(runtime => {
  const exports = runtime.requireModule(
    runtime.__mockRootPath,
    "RegularModule"
  );
  expect(
    exports.filename.endsWith("test_root" + path.sep + "RegularModule.js")
  ).toBe(true);
});
