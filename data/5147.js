{
  expect(console.warn).toBeCalled();
  const exports1 = runtime.requireMock(
    runtime.__mockRootPath,
    "./subdir1/my_module"
  );
  expect(exports1.modulePath).toEqual("subdir1/__mocks__/my_module.js");
  const exports2 = runtime.requireMock(
    runtime.__mockRootPath,
    "./subdir2/my_module"
  );
  expect(exports2.modulePath).toEqual("subdir2/__mocks__/my_module.js");
}
