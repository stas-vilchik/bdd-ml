{
  jestExpect(() => {
    throw new Error("apple");
  })[toThrow]("banana");
}
