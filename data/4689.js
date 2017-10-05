{
  expect(() => {
    jestExpect(() => {
      throw new Err("apple");
    })[toThrow](Err2);
  }).toThrowErrorMatchingSnapshot();
}
