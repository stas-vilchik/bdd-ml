{
  it("passes", () => {
    jestExpect(() => {
      throw new Err();
    })[toThrow](Err);
    jestExpect(() => {
      throw new Err();
    })[toThrow](Error);
    jestExpect(() => {
      throw new Err();
    }).not[toThrow](Err2);
    jestExpect(() => {}).not[toThrow](Err);
  });
  test("did not throw at all", () => {
    expect(() => expect(() => {})[toThrow](Err)).toThrowErrorMatchingSnapshot();
  });
  test("threw, but class did not match", () => {
    expect(() => {
      jestExpect(() => {
        throw new Err("apple");
      })[toThrow](Err2);
    }).toThrowErrorMatchingSnapshot();
  });
  test("threw, but should not have", () => {
    expect(() => {
      jestExpect(() => {
        throw new Err("apple");
      }).not[toThrow](Err);
    }).toThrowErrorMatchingSnapshot();
  });
}
