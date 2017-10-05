{
  test(`'${stringify(v)}' is defined`, () => {
    jestExpect(v).toBeDefined();
    jestExpect(v).not.toBeUndefined();
    expect(() =>
      jestExpect(v).not.toBeDefined()
    ).toThrowErrorMatchingSnapshot();
    expect(() => jestExpect(v).toBeUndefined()).toThrowErrorMatchingSnapshot();
  });
}
