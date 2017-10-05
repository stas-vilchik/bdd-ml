{
  const expectUnmocked = nodeModule => {
    const moduleData = nodeModule();
    expect(moduleData.isUnmocked()).toBe(true);
    expect(moduleData.transitiveNPM3Dep).toEqual("npm3-transitive-dep");
    expect(moduleData.internalImplementation()).toEqual("internal-module-code");
  };

  it("mocks a manually mocked and mapped module", () =>
    createRuntime(__filename, {
      automock: false,
      moduleNameMapper
    }).then(runtime => {
      runtime.setMock(
        __filename,
        "./test_root/mapped_dir/moduleInMapped",
        () => "mocked_in_mapped"
      );
      const parentDep = runtime.requireModule(
        runtime.__mockRootPath,
        "./dep_on_mapped_module.js"
      );
      expect(parentDep).toEqual({
        result: "mocked_in_mapped"
      });
    }));
  it("unmocks transitive dependencies in node_modules by default", () =>
    createRuntime(__filename, {
      automock: true,
      moduleNameMapper,
      unmockedModulePathPatterns: ["npm3-main-dep"]
    }).then(runtime => {
      const root = runtime.requireModule(runtime.__mockRootPath, "./root.js");
      expectUnmocked(
        runtime.requireModuleOrMock(runtime.__mockRootPath, "npm3-main-dep")
      );
      root.jest.resetModuleRegistry();
      expectUnmocked(
        runtime.requireModuleOrMock(runtime.__mockRootPath, "npm3-main-dep")
      );
      const transitiveDep = runtime.requireModuleOrMock(
        runtime.__mockRootPath,
        "npm3-transitive-dep"
      );
      expect(transitiveDep()).toEqual(undefined);
    }));
  it("unmocks transitive dependencies in node_modules when using unmock", () =>
    createRuntime(__filename, {
      automock: true,
      moduleNameMapper
    }).then(runtime => {
      const root = runtime.requireModule(runtime.__mockRootPath);
      root.jest.unmock("npm3-main-dep");
      expectUnmocked(
        runtime.requireModuleOrMock(runtime.__mockRootPath, "npm3-main-dep")
      );
      root.jest.resetModuleRegistry();
      expectUnmocked(
        runtime.requireModuleOrMock(runtime.__mockRootPath, "npm3-main-dep")
      );
      const transitiveDep = runtime.requireModuleOrMock(
        runtime.__mockRootPath,
        "npm3-transitive-dep"
      );
      expect(transitiveDep()).toEqual(undefined);
    }));
  it("unmocks transitive dependencies in node_modules by default when using both patterns and unmock", () =>
    createRuntime(__filename, {
      automock: true,
      moduleNameMapper,
      unmockedModulePathPatterns: ["banana-module"]
    }).then(runtime => {
      const root = runtime.requireModule(runtime.__mockRootPath);
      root.jest.unmock("npm3-main-dep");
      expectUnmocked(
        runtime.requireModuleOrMock(runtime.__mockRootPath, "npm3-main-dep")
      );
      root.jest.resetModuleRegistry();
      expectUnmocked(
        runtime.requireModuleOrMock(runtime.__mockRootPath, "npm3-main-dep")
      );
      const transitiveDep = runtime.requireModuleOrMock(
        runtime.__mockRootPath,
        "npm3-transitive-dep"
      );
      expect(transitiveDep()).toEqual(undefined);
    }));
  it("mocks deep dependencies when using unmock", () =>
    createRuntime(__filename, {
      automock: true,
      moduleNameMapper
    }).then(runtime => {
      const root = runtime.requireModule(runtime.__mockRootPath, "./root.js");
      root.jest.unmock("FooContainer.react");
      const FooContainer = runtime.requireModuleOrMock(
        runtime.__mockRootPath,
        "FooContainer.react"
      );
      expect(new FooContainer().render().indexOf("5")).toBe(-1);
    }));
  it("does not mock deep dependencies when using deepUnmock", () =>
    createRuntime(__filename, {
      moduleNameMapper
    }).then(runtime => {
      const root = runtime.requireModule(runtime.__mockRootPath, "./root.js");
      root.jest.deepUnmock("FooContainer.react");
      const FooContainer = runtime.requireModuleOrMock(
        runtime.__mockRootPath,
        "FooContainer.react"
      );
      expect(new FooContainer().render().indexOf("5")).not.toBe(-1);
    }));
}
