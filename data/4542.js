{
  expect(() => jestExpect(null).toContain(1)).toThrowErrorMatchingSnapshot();
}
