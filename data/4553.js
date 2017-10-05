{
  it(`{pass: true} expect(${n1})toBeCloseTo( ${n2})`, () => {
    jestExpect(n1).toBeCloseTo(n2);
    expect(() =>
      jestExpect(n1).not.toBeCloseTo(n2)
    ).toThrowErrorMatchingSnapshot();
  });
}
