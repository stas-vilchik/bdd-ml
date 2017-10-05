{
  test(`{pass: true} expect(${stringify(
    obj
  )}).toHaveProperty('${keyPath}', ${stringify(value)})`, () => {
    jestExpect(obj).toHaveProperty(keyPath, value);
    expect(() =>
      jestExpect(obj).not.toHaveProperty(keyPath, value)
    ).toThrowErrorMatchingSnapshot();
  });
}
