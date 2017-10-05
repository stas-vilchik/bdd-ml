{
  const actual = {
    a: 1
  };
  const expected = {
    a: 2
  };

  try {
    jestExpect(actual).toBe(expected);
  } catch (error) {
    expect(error.matcherResult).toEqual(
      expect.objectContaining({
        actual,
        expected,
        name: "toBe"
      })
    );
  }
}
