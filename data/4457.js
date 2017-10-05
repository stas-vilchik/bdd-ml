{
  it(`fails for: ${stringify(a)} and ${stringify(b)}`, () => {
    expect(() => jestExpect(a).toBe(b)).toThrowErrorMatchingSnapshot();
  });
}
