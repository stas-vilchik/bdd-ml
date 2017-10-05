{
  it(`fails for '${stringify(v)}' with '.not'`, () => {
    expect(() => jestExpect(v).not.toBe(v)).toThrowErrorMatchingSnapshot();
  });
}
