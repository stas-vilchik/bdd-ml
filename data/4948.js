{
  function x() {}

  const metadata = moduleMocker.getMetadata(x);
  expect(x.name).toBe("x");
  expect(metadata.name).toBe("x");
}
