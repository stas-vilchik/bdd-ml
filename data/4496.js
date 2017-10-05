{
  test(`fails for '${stringify(v)}' with .not`, () => {
    jestExpect(v).not.toBeNull();
    expect(() => jestExpect(v).toBeNull()).toThrowErrorMatchingSnapshot();
  });
}
