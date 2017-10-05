{
  it(`throws: [${n1}, ${n2}]`, () => {
    expect(() => jestExpect(n1).toBeCloseTo(n2)).toThrowErrorMatchingSnapshot();
    jestExpect(n1).not.toBeCloseTo(n2);
  });
}
