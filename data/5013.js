{
  const moduleMap = new ModuleMap();
  const resolver = new Resolver(moduleMap, {
    hasCoreModules: false
  });
  const isCore = resolver.isCoreModule("assert");
  expect(isCore).toEqual(false);
}
