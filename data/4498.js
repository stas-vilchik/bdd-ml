{
  jestExpect(null).toBeNull();
  expect(() => jestExpect(null).not.toBeNull()).toThrowErrorMatchingSnapshot();
}
