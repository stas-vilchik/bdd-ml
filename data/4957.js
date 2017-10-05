{
  function mockConstructor() {}

  const mock = moduleMocker.generateFromMetadata(
    moduleMocker.getMetadata(mockConstructor)
  );
  expect(!mock.name || mock.name === "mockConstructor").toBeTruthy();
}
