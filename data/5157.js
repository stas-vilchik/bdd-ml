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
});
