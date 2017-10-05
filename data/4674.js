{
  expect(() => {
    throw new Error("apple");
  })[toThrow](/apple/);
  expect(() => {
    throw new Error("banana");
  }).not[toThrow](/apple/);
  expect(() => {}).not[toThrow](/apple/);
}
