{
  it("passes", () => {
    jestExpect(() => {
      throw new Error("apple");
    })[toThrow]("apple");
    jestExpect(() => {
      throw new Error("banana");
    }).not[toThrow]("apple");
    jestExpect(() => {}).not[toThrow]("apple");
  });
  test("did not throw at all", () => {
    expect(() =>
      jestExpect(() => {})[toThrow]("apple")
    ).toThrowErrorMatchingSnapshot();
  });
  test("threw, but message did not match", () => {
    expect(() => {
      jestExpect(() => {
        throw new Error("apple");
      })[toThrow]("banana");
    }).toThrowErrorMatchingSnapshot();
  });
  it("properly escapes strings when matching against errors", () => {
    jestExpect(() => {
      throw new TypeError('"this"? throws.');
    })[toThrow]('"this"? throws.');
  });
  test("threw, but should not have", () => {
    expect(() => {
      jestExpect(() => {
        throw new Error("apple");
      }).not[toThrow]("apple");
    }).toThrowErrorMatchingSnapshot();
  });
}
