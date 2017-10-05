{
  it("does not accept arguments", () => {
    expect(() => jestExpect(0).toBeTruthy(null)).toThrowErrorMatchingSnapshot();
    expect(() => jestExpect(0).toBeFalsy(null)).toThrowErrorMatchingSnapshot();
  });
  [{}, [], true, 1, "a", 0.5, new Map(), () => {}, Infinity].forEach(v => {
    test(`'${stringify(v)}' is truthy`, () => {
      jestExpect(v).toBeTruthy();
      jestExpect(v).not.toBeFalsy();
      expect(() =>
        jestExpect(v).not.toBeTruthy()
      ).toThrowErrorMatchingSnapshot();
      expect(() => jestExpect(v).toBeFalsy()).toThrowErrorMatchingSnapshot();
    });
  });
  [false, null, NaN, 0, "", undefined].forEach(v => {
    test(`'${stringify(v)}' is falsy`, () => {
      jestExpect(v).toBeFalsy();
      jestExpect(v).not.toBeTruthy();
      expect(() => jestExpect(v).toBeTruthy()).toThrowErrorMatchingSnapshot();
      expect(() =>
        jestExpect(v).not.toBeFalsy()
      ).toThrowErrorMatchingSnapshot();
    });
  });
}
