{
  const fn = jest.fn();
  fn("foo1", "bar");
  fn("foo", "bar1");
  fn("foo", "bar");
  jestExpect(fn)[calledWith]("foo", "bar");
  expect(() =>
    jestExpect(fn).not[calledWith]("foo", "bar")
  ).toThrowErrorMatchingSnapshot();
}
