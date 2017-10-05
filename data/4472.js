{
  test(`passing ${stringify(a)} and ${stringify(b)}`, () => {
    expect(() =>
      jestExpect(a).not.toBeInstanceOf(b)
    ).toThrowErrorMatchingSnapshot();
    jestExpect(a).toBeInstanceOf(b);
  });
}
