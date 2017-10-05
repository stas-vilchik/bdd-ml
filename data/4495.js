{
  [{}, [], true, 1, "a", 0.5, new Map(), () => {}, Infinity].forEach(v => {
    test(`fails for '${stringify(v)}' with .not`, () => {
      jestExpect(v).not.toBeNull();
      expect(() => jestExpect(v).toBeNull()).toThrowErrorMatchingSnapshot();
    });
  });
  it("pass for null", () => {
    jestExpect(null).toBeNull();
    expect(() =>
      jestExpect(null).not.toBeNull()
    ).toThrowErrorMatchingSnapshot();
  });
}
