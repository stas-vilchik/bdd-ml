{
  test(`{pass: true} expect(${stringify(
    received
  )}).toHaveLength(${length})`, () => {
    jestExpect(received).toHaveLength(length);
    expect(() =>
      jestExpect(received).not.toHaveLength(length)
    ).toThrowErrorMatchingSnapshot();
  });
}
