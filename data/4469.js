{
  expect(() => jestExpect(a).not.toEqual(b)).toThrowErrorMatchingSnapshot();
}
