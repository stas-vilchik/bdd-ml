createRuntime(__filename).then(runtime => {
  const testRequire = runtime.requireModule.bind(
    runtime,
    runtime.__mockRootPath
  );
  const module = testRequire("RegularModule");
  const mockModule = module.jest.genMockFromModule("RegularModule");
  const testObjectPrototype = Object.getPrototypeOf(module.object);
  const mockObjectPrototype = Object.getPrototypeOf(mockModule.object);
  expect(mockObjectPrototype).toBe(testObjectPrototype);
});
