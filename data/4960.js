{
  const foo = Object.defineProperties(
    {},
    {
      __esModule: {
        value: true
      },
      enumGetter: {
        enumerable: true,
        get: () => 10
      }
    }
  );
  const mock = moduleMocker.generateFromMetadata(moduleMocker.getMetadata(foo));
  expect(mock.enumGetter).toBeDefined();
}
