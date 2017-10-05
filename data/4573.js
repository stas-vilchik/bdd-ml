{
  [
    [[1, 2], 2],
    [[], 0],
    [["a", "b"], 2],
    ["abc", 3],
    ["", 0]
  ].forEach(([received, length]) => {
    test(`{pass: true} expect(${stringify(
      received
    )}).toHaveLength(${length})`, () => {
      jestExpect(received).toHaveLength(length);
      expect(() =>
        jestExpect(received).not.toHaveLength(length)
      ).toThrowErrorMatchingSnapshot();
    });
  });
  [
    [[1, 2], 3],
    [[], 1],
    [["a", "b"], 99],
    ["abc", 66],
    ["", 1]
  ].forEach(([received, length]) => {
    test(`{pass: false} expect(${stringify(
      received
    )}).toHaveLength(${length})`, () => {
      jestExpect(received).not.toHaveLength(length);
      expect(() =>
        jestExpect(received).toHaveLength(length)
      ).toThrowErrorMatchingSnapshot();
    });
  });
  test("error cases", () => {
    expect(() =>
      jestExpect({
        a: 9
      }).toHaveLength(1)
    ).toThrowErrorMatchingSnapshot();
    expect(() => jestExpect(0).toHaveLength(1)).toThrowErrorMatchingSnapshot();
    expect(() =>
      jestExpect(undefined).toHaveLength(1)
    ).toThrowErrorMatchingSnapshot();
  });
}
