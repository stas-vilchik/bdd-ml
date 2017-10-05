{
  expect(() => jestExpect(n1).toMatch(n2)).toThrowErrorMatchingSnapshot();
}
