{
  it(`throws expect(${stringify(n1)}).toMatchObject(${stringify(n2)})`, () => {
    expect(() =>
      jestExpect(n1).toMatchObject(n2)
    ).toThrowErrorMatchingSnapshot();
  });
}
