{
  const array = [1, 2, 3];
  const metadata = moduleMocker.getMetadata(array);
  expect(metadata.value).toBeUndefined();
  expect(metadata.members).toBeUndefined();
  expect(metadata.type).toEqual("array");
}
