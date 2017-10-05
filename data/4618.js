{
  const fn = jest.fn();
  fn();
  fn();
  jestExpect(fn).toHaveBeenCalledTimes(2);
  expect(() =>
    jestExpect(fn).not.toHaveBeenCalledTimes(2)
  ).toThrowErrorMatchingSnapshot();
}
