{
  test(`{pass: true} expect(${stringify(
    obj
  )}).toHaveProperty('${keyPath}')'`, () => {
    jestExpect(obj).toHaveProperty(keyPath);
    expect(() =>
      jestExpect(obj).not.toHaveProperty(keyPath)
    ).toThrowErrorMatchingSnapshot();
  });
}
