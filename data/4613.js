{
  const fn = jest.fn();
  fn();
  jestExpect(fn).toHaveBeenCalledTimes(1);
  [{}, [], true, "a", new Map(), () => {}].forEach(value => {
    expect(() =>
      jestExpect(fn).toHaveBeenCalledTimes(value)
    ).toThrowErrorMatchingSnapshot();
  });
}
