{
  test(`{error} expect(${stringify(obj)}).toHaveProperty('${keyPath}')`, () => {
    expect(() =>
      jestExpect(obj).toHaveProperty(keyPath)
    ).toThrowErrorMatchingSnapshot();
  });
}
