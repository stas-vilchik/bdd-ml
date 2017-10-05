{
  [{}, [], true, 1, "a", 0.5, new Map(), () => {}, Infinity].forEach(v => {
    test(`'${stringify(v)}' is defined`, () => {
      jestExpect(v).toBeDefined();
      jestExpect(v).not.toBeUndefined();
      expect(() =>
        jestExpect(v).not.toBeDefined()
      ).toThrowErrorMatchingSnapshot();
      expect(() =>
        jestExpect(v).toBeUndefined()
      ).toThrowErrorMatchingSnapshot();
    });
  });
  test("undefined is undefined", () => {
    jestExpect(undefined).toBeUndefined();
    jestExpect(undefined).not.toBeDefined();
    expect(() =>
      jestExpect(undefined).toBeDefined()
    ).toThrowErrorMatchingSnapshot();
    expect(() =>
      jestExpect(undefined).not.toBeUndefined()
    ).toThrowErrorMatchingSnapshot();
  });
}
