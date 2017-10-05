{
  jestExpect(() => {
    throw new Error("apple");
  }).not[toThrow]("apple");
}
