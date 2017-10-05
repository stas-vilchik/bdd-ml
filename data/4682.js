{
  expect(() => {
    jestExpect(() => {
      throw new Error("apple");
    }).not[toThrow](/apple/);
  }).toThrowErrorMatchingSnapshot();
}
