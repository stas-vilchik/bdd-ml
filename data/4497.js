{
  jestExpect(v).not.toBeNull();
  expect(() => jestExpect(v).toBeNull()).toThrowErrorMatchingSnapshot();
}
