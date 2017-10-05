{
  it("does not throw", () => {
    jestExpect("a").not.toBe("b");
    jestExpect("a").toBe("a");
    jestExpect(1).not.toBe(2);
    jestExpect(1).toBe(1);
    jestExpect(null).not.toBe(undefined);
    jestExpect(null).toBe(null);
    jestExpect(undefined).toBe(undefined);
  });
  [
    [1, 2],
    [true, false],
    [{}, {}],
    [
      {
        a: 1
      },
      {
        a: 1
      }
    ],
    [
      {
        a: 1
      },
      {
        a: 5
      }
    ],
    ["abc", "cde"],
    [[], []],
    [null, undefined]
  ].forEach(([a, b]) => {
    it(`fails for: ${stringify(a)} and ${stringify(b)}`, () => {
      expect(() => jestExpect(a).toBe(b)).toThrowErrorMatchingSnapshot();
    });
  });
  [false, 1, "a", undefined, null, {}, []].forEach(v => {
    it(`fails for '${stringify(v)}' with '.not'`, () => {
      expect(() => jestExpect(v).not.toBe(v)).toThrowErrorMatchingSnapshot();
    });
  });
  it("does not crash on circular references", () => {
    const obj = {};
    obj.circular = obj;
    expect(() => jestExpect(obj).toBe({})).toThrowErrorMatchingSnapshot();
  });
  test("assertion error matcherResult property contains matcher name, expected and actual values", () => {
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
  });
}
