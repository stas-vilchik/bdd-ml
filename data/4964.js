{
  expect(() =>
    moduleMocker.generateFromMetadata(moduleMocker.getMetadata(/a/))
  ).not.toThrow();
}
