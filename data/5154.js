{
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
}
