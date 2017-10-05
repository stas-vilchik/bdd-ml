{
  expect(() => {
    jestExpect(() => {
      throw new Error("apple");
    })[toThrow](/banana/);
  }).toThrowErrorMatchingSnapshot();
}
