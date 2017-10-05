{
  jestExpect(n1).toMatchObject(n2);
  expect(() =>
    jestExpect(n1).not.toMatchObject(n2)
  ).toThrowErrorMatchingSnapshot();
}
