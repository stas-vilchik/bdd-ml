{
  expect(() => jestExpect(a).toBe(b)).toThrowErrorMatchingSnapshot();
}
