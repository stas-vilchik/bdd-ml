{
  class A {}

  class B {}

  [[new Map(), Map], [[], Array], [new A(), A]].forEach(([a, b]) => {
    test(`passing ${stringify(a)} and ${stringify(b)}`, () => {
      expect(() =>
        jestExpect(a).not.toBeInstanceOf(b)
      ).toThrowErrorMatchingSnapshot();
      jestExpect(a).toBeInstanceOf(b);
    });
  });
  [
    ["a", String],
    [1, Number],
    [true, Boolean],
    [new A(), B],
    [Object.create(null), A]
  ].forEach(([a, b]) => {
    test(`failing ${stringify(a)} and ${stringify(b)}`, () => {
      expect(() =>
        jestExpect(a).toBeInstanceOf(b)
      ).toThrowErrorMatchingSnapshot();
      jestExpect(a).not.toBeInstanceOf(b);
    });
  });
  it("throws if constructor is not a function", () => {
    expect(() =>
      jestExpect({}).toBeInstanceOf(4)
    ).toThrowErrorMatchingSnapshot();
  });
}
