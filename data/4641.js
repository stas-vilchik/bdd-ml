{
  const fn = jest.fn();
  const s1 = new Set([1, 2]);
  const s2 = new Set([1, 2]);
  const s3 = new Set([3, 4]);
  fn(s1);
  jestExpect(fn)[calledWith](s2);
  jestExpect(fn).not[calledWith](s3);
  expect(() =>
    jestExpect(fn).not[calledWith](s2)
  ).toThrowErrorMatchingSnapshot();
  expect(() => jestExpect(fn)[calledWith](s3)).toThrowErrorMatchingSnapshot();
}
