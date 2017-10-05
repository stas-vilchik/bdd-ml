createRuntime(__filename, {
  automock: false,
  moduleNameMapper,
  unmockedModulePathPatterns: ["npm3-main-dep"]
}).then(runtime => {
  const root = runtime.requireModule(runtime.__mockRootPath);
  root.jest.enableAutomock();
  const nodeModule = runtime.requireModuleOrMock(
    runtime.__mockRootPath,
    "npm3-main-dep"
  );
  const moduleData = nodeModule();
  expect(moduleData.isUnmocked()).toBe(true);
});
