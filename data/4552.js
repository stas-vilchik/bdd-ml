{
  [
    [0, 0],
    [0, 0.001],
    [1.23, 1.229],
    [1.23, 1.226],
    [1.23, 1.225],
    [1.23, 1.234]
  ].forEach(([n1, n2]) => {
    it(`{pass: true} expect(${n1})toBeCloseTo( ${n2})`, () => {
      jestExpect(n1).toBeCloseTo(n2);
      expect(() =>
        jestExpect(n1).not.toBeCloseTo(n2)
      ).toThrowErrorMatchingSnapshot();
    });
  });
  [[0, 0.01], [1, 1.23], [1.23, 1.2249999]].forEach(([n1, n2]) => {
    it(`throws: [${n1}, ${n2}]`, () => {
      expect(() =>
        jestExpect(n1).toBeCloseTo(n2)
      ).toThrowErrorMatchingSnapshot();
      jestExpect(n1).not.toBeCloseTo(n2);
    });
  });
  [[0, 0.1, 0], [0, 0.0001, 3], [0, 0.000004, 5]].forEach(([n1, n2, p]) => {
    it(`accepts an optional precision argument: [${n1}, ${n2}, ${p}]`, () => {
      jestExpect(n1).toBeCloseTo(n2, p);
      expect(() =>
        jestExpect(n1).not.toBeCloseTo(n2, p)
      ).toThrowErrorMatchingSnapshot();
    });
  });
}
