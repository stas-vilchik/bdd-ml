{
  jestExpect(() => {
    throw new Error("apple");
  })[toThrow]("apple");
  jestExpect(() => {
    throw new Error("banana");
  }).not[toThrow]("apple");
  jestExpect(() => {}).not[toThrow]("apple");
}
