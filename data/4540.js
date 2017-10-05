{
  jestExpect(list).not.toContain(v);
  expect(() => jestExpect(list).toContain(v)).toThrowErrorMatchingSnapshot();
}
