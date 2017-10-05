{
  const metadata = moduleMocker.getMetadata(Symbol.for("bowties.are.cool"));
  expect(metadata.value).toEqual(Symbol.for("bowties.are.cool"));
  expect(moduleMocker.getMetadata("banana").value).toEqual("banana");
  expect(moduleMocker.getMetadata(27).value).toEqual(27);
  expect(moduleMocker.getMetadata(false).value).toEqual(false);
}
