createRuntime(__filename).then(runtime => {
  const exports = runtime.requireModule(
    runtime.__mockRootPath,
    "RegularModule"
  );
  expect(exports.parent).toEqual({
    exports: {},
    filename: "mock.js",
    id: "mockParent"
  });
});
