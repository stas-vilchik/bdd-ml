{
  expect(() => {
    runtime.requireMock(runtime.__mockRootPath, "DoesntExist");
  }).toThrow();
}
