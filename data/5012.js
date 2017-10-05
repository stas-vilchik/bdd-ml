{
  it("returns false if `hasCoreModules` is false.", () => {
    const moduleMap = new ModuleMap();
    const resolver = new Resolver(moduleMap, {
      hasCoreModules: false
    });
    const isCore = resolver.isCoreModule("assert");
    expect(isCore).toEqual(false);
  });
  it("returns true if `hasCoreModules` is true and `moduleName` is a core module.", () => {
    const moduleMap = new ModuleMap();
    const resolver = new Resolver(moduleMap, {});
    const isCore = resolver.isCoreModule("assert");
    expect(isCore).toEqual(true);
  });
  it("returns false if `hasCoreModules` is true and `moduleName` is not a core module.", () => {
    const moduleMap = new ModuleMap();
    const resolver = new Resolver(moduleMap, {});
    const isCore = resolver.isCoreModule("not-a-core-module");
    expect(isCore).toEqual(false);
  });
}
