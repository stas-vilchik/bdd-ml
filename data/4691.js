{
  expect(() => {
    jestExpect(() => {
      throw new Err("apple");
    }).not[toThrow](Err);
  }).toThrowErrorMatchingSnapshot();
}
