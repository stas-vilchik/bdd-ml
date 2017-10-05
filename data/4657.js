{
  jestExpect(() => {
    throw new Error("apple");
  })[toThrow]();
  jestExpect(() => {}).not[toThrow]();
}
