{
  jestExpect(list).toContain(v);
  expect(() =>
    jestExpect(list).not.toContain(v)
  ).toThrowErrorMatchingSnapshot();
}
