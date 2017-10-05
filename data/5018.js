{
  it("is possible to use custom resolver to resolve deps inside mock modules with moduleNameMapper", () => {
    userResolver.mockImplementation(() => "module");
    const moduleMap = new ModuleMap({
      duplicates: [],
      map: [],
      mocks: []
    });
    const resolver = new Resolver(moduleMap, {
      moduleNameMapper: [
        {
          moduleName: "$1",
          regex: /(.*)/
        }
      ],
      resolver: require.resolve("../__mocks__/userResolver")
    });

    const src = require.resolve("../");

    resolver.getMockModule(src, "dependentModule");
    expect(userResolver).toHaveBeenCalled();
    expect(userResolver.mock.calls[0][0]).toBe("dependentModule");
    expect(userResolver.mock.calls[0][1]).toHaveProperty(
      "basedir",
      path.dirname(src)
    );
  });
  it("is possible to use custom resolver to resolve deps inside mock modules without moduleNameMapper", () => {
    userResolver.mockImplementation(() => "module");
    const moduleMap = new ModuleMap({
      duplicates: [],
      map: [],
      mocks: []
    });
    const resolver = new Resolver(moduleMap, {
      resolver: require.resolve("../__mocks__/userResolver")
    });

    const src = require.resolve("../");

    resolver.getMockModule(src, "dependentModule");
    expect(userResolver).toHaveBeenCalled();
    expect(userResolver.mock.calls[0][0]).toBe("dependentModule");
    expect(userResolver.mock.calls[0][1]).toHaveProperty(
      "basedir",
      path.dirname(src)
    );
  });
}
