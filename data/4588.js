{
  test(`{pass: false} expect(${stringify(
    obj
  )}).toHaveProperty('${keyPath}', ${stringify(value)})`, () => {
    expect(() =>
      jestExpect(obj).toHaveProperty(keyPath, value)
    ).toThrowErrorMatchingSnapshot();
    jestExpect(obj).not.toHaveProperty(keyPath, value);
  });
}
