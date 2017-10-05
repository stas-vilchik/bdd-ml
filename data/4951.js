{
  const metadata = moduleMocker.getMetadata(undefined);
  expect(metadata.value).toBeUndefined();
  expect(metadata.members).toBeUndefined();
  expect(metadata.type).toEqual("undefined");
}
