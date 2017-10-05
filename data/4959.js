{
  const foo = Object.defineProperties(
    {},
    {
      nonEnumGetter: {
        get: () => {
          throw new Error();
        }
      },
      nonEnumMethod: {
        value: () => {}
      }
    }
  );
  const mock = moduleMocker.generateFromMetadata(moduleMocker.getMetadata(foo));
  expect(typeof foo.nonEnumMethod).toBe("function");
  expect(mock.nonEnumMethod.mock).not.toBeUndefined();
  expect(mock.nonEnumGetter).toBeUndefined();
}
