createRuntime(__filename).then(runtime => {
  expect(() => {
    runtime.requireMock(runtime.__mockRootPath, "DoesntExist");
  }).toThrow();
});
