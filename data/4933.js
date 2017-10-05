{
  expect(() => {
    ensureNoExpected(undefined);
  }).not.toThrow();
}
