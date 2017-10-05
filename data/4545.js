{
  jestExpect(list).toContainEqual(v);
  expect(() =>
    jestExpect(list).not.toContainEqual(v)
  ).toThrowErrorMatchingSnapshot();
}
