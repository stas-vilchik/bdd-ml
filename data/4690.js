{
  jestExpect(() => {
    throw new Err("apple");
  })[toThrow](Err2);
}
