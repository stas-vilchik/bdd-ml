{
  it(`throws: [${n1}, ${n2}]`, () => {
    expect(() => jestExpect(n1).toMatch(n2)).toThrowErrorMatchingSnapshot();
  });
}
