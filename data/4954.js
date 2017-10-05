{
  function foo() {}

  const mock = moduleMocker.generateFromMetadata(moduleMocker.getMetadata(foo));
  expect(mock.name).toBe("foo");
}
