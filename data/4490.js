{
  it("{pass: true} expect(NaN).toBeNaN()", () => {
    [NaN, Math.sqrt(-1), Infinity - Infinity, 0 / 0].forEach(v => {
      jestExpect(v).toBeNaN();
      expect(() => jestExpect(v).not.toBeNaN()).toThrowErrorMatchingSnapshot();
    });
  });
  it("throws", () => {
    [1, "", null, undefined, {}, [], 0.2, 0, Infinity, -Infinity].forEach(v => {
      expect(() => jestExpect(v).toBeNaN()).toThrowErrorMatchingSnapshot();
      jestExpect(v).not.toBeNaN();
    });
  });
}
