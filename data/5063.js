createRuntime(__filename, {
  transform: {
    "^.+\\.js$": "./test_preprocessor"
  }
}).then(runtime => {
  const modulePath = path.resolve(
    path.dirname(runtime.__mockRootPath),
    "internal-root.js"
  );
  const exports = runtime.requireInternalModule(modulePath);
  expect(exports()).toBe("internal-module-data");
});
