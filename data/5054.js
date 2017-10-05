{
  const testRequire = runtime.requireModule.bind(
    runtime,
    runtime.__mockRootPath
  );
  const module = testRequire("RegularModule");
  const origModuleStateValue = module.getModuleStateValue();
  expect(origModuleStateValue).toBe("default");
  const mock = module.jest.genMockFromModule("ModuleWithSideEffects");
  expect(mock.fn()).toBe(undefined);
  expect(module.getModuleStateValue()).toBe(origModuleStateValue);
}
