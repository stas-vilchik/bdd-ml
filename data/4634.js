{
  const fn = jest.fn();
  fn("foo", "bar1");
  fn("foo", "bar2");
  fn("foo", "bar3");
  jestExpect(fn).not[calledWith]("foo", "bar");
  expect(() =>
    jestExpect(fn)[calledWith]("foo", "bar")
  ).toThrowErrorMatchingSnapshot();
}
