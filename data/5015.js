{
  const moduleMap = new ModuleMap();
  const resolver = new Resolver(moduleMap, {});
  const isCore = resolver.isCoreModule("not-a-core-module");
  expect(isCore).toEqual(false);
}
