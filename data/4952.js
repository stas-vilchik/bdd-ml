{
  const metadata = moduleMocker.getMetadata(null);
  expect(metadata.value).toBeNull();
  expect(metadata.members).toBeUndefined();
  expect(metadata.type).toEqual("null");
}
