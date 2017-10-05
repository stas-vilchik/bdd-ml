{
  expect(() => jestExpect(v).not.toBe(v)).toThrowErrorMatchingSnapshot();
}
