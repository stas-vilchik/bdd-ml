{
  const moduleMap = new ModuleMap();
  const resolver = new Resolver(moduleMap, {});
  const isCore = resolver.isCoreModule("assert");
  expect(isCore).toEqual(true);
}
