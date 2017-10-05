{
  jestExpect(() => {
    throw new Err();
  })[toThrow](Err);
  jestExpect(() => {
    throw new Err();
  })[toThrow](Error);
  jestExpect(() => {
    throw new Err();
  }).not[toThrow](Err2);
  jestExpect(() => {}).not[toThrow](Err);
}
