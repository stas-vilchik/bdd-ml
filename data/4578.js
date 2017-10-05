{
  jestExpect(received).not.toHaveLength(length);
  expect(() =>
    jestExpect(received).toHaveLength(length)
  ).toThrowErrorMatchingSnapshot();
}
