{
  test(`{pass: false} expect(${stringify(a)}).toEqual(${stringify(b)})`, () => {
    expect(() => jestExpect(a).toEqual(b)).toThrowErrorMatchingSnapshot();
  });
}
