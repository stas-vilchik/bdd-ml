{
  it("passes", () => {
    expect(() => {
      throw new Error("apple");
    })[toThrow](/apple/);
    expect(() => {
      throw new Error("banana");
    }).not[toThrow](/apple/);
    expect(() => {}).not[toThrow](/apple/);
  });
  test("did not throw at all", () => {
    expect(() =>
      jestExpect(() => {})[toThrow](/apple/)
    ).toThrowErrorMatchingSnapshot();
  });
  test("threw, but message did not match", () => {
    expect(() => {
      jestExpect(() => {
        throw new Error("apple");
      })[toThrow](/banana/);
    }).toThrowErrorMatchingSnapshot();
  });
  test("threw, but should not have", () => {
    expect(() => {
      jestExpect(() => {
        throw new Error("apple");
      }).not[toThrow](/apple/);
    }).toThrowErrorMatchingSnapshot();
  });
}
