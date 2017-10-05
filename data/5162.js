{
  const root = runtime.requireModule(runtime.__mockRootPath, "./root.js");
  root.jest.deepUnmock("FooContainer.react");
  const FooContainer = runtime.requireModuleOrMock(
    runtime.__mockRootPath,
    "FooContainer.react"
  );
  expect(new FooContainer().render().indexOf("5")).not.toBe(-1);
}
