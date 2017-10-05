{
  const ClassFoo = function() {};

  ClassFoo.prototype.x = () => {};

  const ClassFooMock = moduleMocker.generateFromMetadata(
    moduleMocker.getMetadata(ClassFoo)
  );
  const foo = new ClassFooMock();
  const bar = new ClassFooMock();
  foo.x.mockImplementation(() => {
    return "Foo";
  });
  bar.x.mockImplementation(() => {
    return "Bar";
  });
  expect(foo.x()).toBe("Foo");
  expect(bar.x()).toBe("Bar");
}
