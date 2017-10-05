{
  expect(() =>
    jestExpect(a).not.toBeInstanceOf(b)
  ).toThrowErrorMatchingSnapshot();
  jestExpect(a).toBeInstanceOf(b);
}
