{
  test(`{pass: false} expect(${stringify(a)}).not.toEqual(${stringify(
    b
  )})`, () => {
    expect(() => jestExpect(a).not.toEqual(b)).toThrowErrorMatchingSnapshot();
  });
}
