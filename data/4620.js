{
  const fn = jest.fn();
  fn();
  fn();
  fn();
  jestExpect(fn).toHaveBeenCalledTimes(3);
  jestExpect(fn).not.toHaveBeenCalledTimes(2);
  expect(() =>
    jestExpect(fn).toHaveBeenCalledTimes(2)
  ).toThrowErrorMatchingSnapshot();
}
