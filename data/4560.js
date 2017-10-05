{
  jestExpect(n1).toBeCloseTo(n2, p);
  expect(() =>
    jestExpect(n1).not.toBeCloseTo(n2, p)
  ).toThrowErrorMatchingSnapshot();
}
