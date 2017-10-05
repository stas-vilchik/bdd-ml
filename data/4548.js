{
  jestExpect(list).not.toContainEqual(v);
  expect(() =>
    jestExpect(list).toContainEqual(v)
  ).toThrowErrorMatchingSnapshot();
}
