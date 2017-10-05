{
  it(`{pass: true} expect(${small}).toBeLessThan(${big})`, () => {
    jestExpect(small).toBeLessThan(big);
  });
  it(`{pass: false} expect(${big}).toBeLessThan(${small})`, () => {
    jestExpect(big).not.toBeLessThan(small);
  });
  it(`{pass: true} expect(${big}).toBeGreaterThan(${small})`, () => {
    jestExpect(big).toBeGreaterThan(small);
  });
  it(`{pass: false} expect(${small}).toBeGreaterThan(${big})`, () => {
    jestExpect(small).not.toBeGreaterThan(big);
  });
  it(`{pass: true} expect(${small}).toBeLessThanOrEqual(${big})`, () => {
    jestExpect(small).toBeLessThanOrEqual(big);
  });
  it(`{pass: false} expect(${big}).toBeLessThanOrEqual(${small})`, () => {
    jestExpect(big).not.toBeLessThanOrEqual(small);
  });
  it(`{pass: true} expect(${big}).toBeGreaterThanOrEqual(${small})`, () => {
    jestExpect(big).toBeGreaterThanOrEqual(small);
  });
  it(`{pass: false} expect(${small}).toBeGreaterThanOrEqual(${big})`, () => {
    jestExpect(small).not.toBeGreaterThanOrEqual(big);
  });
  it(`throws: [${small}, ${big}]`, () => {
    expect(() =>
      jestExpect(small).toBeGreaterThan(big)
    ).toThrowErrorMatchingSnapshot();
    expect(() =>
      jestExpect(small).not.toBeLessThan(big)
    ).toThrowErrorMatchingSnapshot();
    expect(() =>
      jestExpect(big).not.toBeGreaterThan(small)
    ).toThrowErrorMatchingSnapshot();
    expect(() =>
      jestExpect(big).toBeLessThan(small)
    ).toThrowErrorMatchingSnapshot();
    expect(() =>
      jestExpect(small).toBeGreaterThanOrEqual(big)
    ).toThrowErrorMatchingSnapshot();
    expect(() =>
      jestExpect(small).not.toBeLessThanOrEqual(big)
    ).toThrowErrorMatchingSnapshot();
    expect(() =>
      jestExpect(big).not.toBeGreaterThanOrEqual(small)
    ).toThrowErrorMatchingSnapshot();
    expect(() =>
      jestExpect(big).toBeLessThanOrEqual(small)
    ).toThrowErrorMatchingSnapshot();
  });
}
