{
  expect(() => jestExpect(n1).toMatchObject(n2)).toThrowErrorMatchingSnapshot();
}
