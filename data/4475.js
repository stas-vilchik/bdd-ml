{
  test(`failing ${stringify(a)} and ${stringify(b)}`, () => {
    expect(() =>
      jestExpect(a).toBeInstanceOf(b)
    ).toThrowErrorMatchingSnapshot();
    jestExpect(a).not.toBeInstanceOf(b);
  });
}
