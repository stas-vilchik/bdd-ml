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
});
