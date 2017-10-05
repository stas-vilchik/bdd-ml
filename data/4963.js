{
  const fooMock = moduleMocker.generateFromMetadata(
    moduleMocker.getMetadata(() => {})
  );
  const barMock = moduleMocker.generateFromMetadata(
    moduleMocker.getMetadata(fooMock.bind(null))
  );
  expect(barMock).not.toThrow();
}
