createRuntime(__filename).then(runtime => {
  expect(() => {
    runtime.requireModule(runtime.__mockRootPath, "fs");
  }).not.toThrow();
});
