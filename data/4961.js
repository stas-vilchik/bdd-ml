{
  class ClassFoo {
    foo() {}

    toString() {
      return "Foo";
    }
  }

  const ClassFooMock = moduleMocker.generateFromMetadata(
    moduleMocker.getMetadata(ClassFoo)
  );
  const foo = new ClassFooMock();
  const instanceFoo = new ClassFoo();
  const instanceFooMock = moduleMocker.generateFromMetadata(
    moduleMocker.getMetadata(instanceFoo)
  );
  expect(typeof foo.foo).toBe("function");
  expect(typeof instanceFooMock.foo).toBe("function");
  expect(instanceFooMock.foo.mock).not.toBeUndefined();
  expect(instanceFooMock.toString.mock).not.toBeUndefined();
}
