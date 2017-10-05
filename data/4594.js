{
  test(`{pass: false} expect(${stringify(
    obj
  )}).toHaveProperty('${keyPath}')`, () => {
    expect(() =>
      jestExpect(obj).toHaveProperty(keyPath)
    ).toThrowErrorMatchingSnapshot();
    jestExpect(obj).not.toHaveProperty(keyPath);
  });
}
