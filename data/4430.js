{
  jestExpect(15).toBeDivisibleBy(5);
  jestExpect(15).toBeDivisibleBy(3);
  jestExpect(15).not.toBeDivisibleBy(6);
  jestExpect(() =>
    jestExpect(15).toBeDivisibleBy(2)
  ).toThrowErrorMatchingSnapshot();
}
