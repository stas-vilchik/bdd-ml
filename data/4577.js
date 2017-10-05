{
  test(`{pass: false} expect(${stringify(
    received
  )}).toHaveLength(${length})`, () => {
    jestExpect(received).not.toHaveLength(length);
    expect(() =>
      jestExpect(received).toHaveLength(length)
    ).toThrowErrorMatchingSnapshot();
  });
}
