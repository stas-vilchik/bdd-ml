{
  const fn = jest.fn();
  fn("foo", "bar");
  jestExpect(fn)[calledWith]("foo", "bar");
  expect(() =>
    jestExpect(fn).not[calledWith]("foo", "bar")
  ).toThrowErrorMatchingSnapshot();
}
