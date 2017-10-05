{
  it(`{pass: true} expect(${n1}).toMatch(${n2})`, () => {
    jestExpect(n1).toMatch(n2);
    expect(() => jestExpect(n1).not.toMatch(n2)).toThrowErrorMatchingSnapshot();
  });
}
