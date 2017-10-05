{
  expect(() => jestExpect(a).toBeInstanceOf(b)).toThrowErrorMatchingSnapshot();
  jestExpect(a).not.toBeInstanceOf(b);
}
