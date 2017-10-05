{
  jestExpect(received).toHaveLength(length);
  expect(() =>
    jestExpect(received).not.toHaveLength(length)
  ).toThrowErrorMatchingSnapshot();
}
