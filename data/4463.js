{
  [
    [true, false],
    [1, 2],
    [0, -0],
    [
      {
        a: 5
      },
      {
        b: 6
      }
    ],
    ["banana", "apple"],
    [null, undefined],
    [[1], [2]],
    [[1, 2], [2, 1]],
    [new Map(), new Set()],
    [new Set([1, 2]), new Set()],
    [new Set([1, 2]), new Set([1, 2, 3])],
    [new Map([[1, "one"], [2, "two"]]), new Map([[1, "one"]])],
    [new Map([["a", 0]]), new Map([["b", 0]])],
    [new Map([["v", 1]]), new Map([["v", 2]])],
    [
      {
        a: 1,
        b: 2
      },
      jestExpect.objectContaining({
        a: 2
      })
    ],
    [
      false,
      jestExpect.objectContaining({
        a: 2
      })
    ],
    [[1, 3], jestExpect.arrayContaining([1, 2])],
    [1, jestExpect.arrayContaining([1, 2])],
    ["abd", jestExpect.stringContaining("bc")],
    ["abd", jestExpect.stringMatching(/bc/i)],
    [undefined, jestExpect.anything()],
    [undefined, jestExpect.any(Function)],
    [
      "Eve",
      {
        asymmetricMatch: function asymmetricMatch(who) {
          return who === "Alice" || who === "Bob";
        }
      }
    ]
  ].forEach(([a, b]) => {
    test(`{pass: false} expect(${stringify(a)}).toEqual(${stringify(
      b
    )})`, () => {
      expect(() => jestExpect(a).toEqual(b)).toThrowErrorMatchingSnapshot();
    });
  });
  [
    [true, true],
    [1, 1],
    ["abc", "abc"],
    [[1], [1]],
    [[1, 2], [1, 2]],
    [{}, {}],
    [
      {
        a: 99
      },
      {
        a: 99
      }
    ],
    [new Set(), new Set()],
    [new Set([1, 2]), new Set([1, 2])],
    [new Set([1, 2]), new Set([2, 1])],
    [new Map(), new Map()],
    [new Map([[1, "one"], [2, "two"]]), new Map([[1, "one"], [2, "two"]])],
    [new Map([[1, "one"], [2, "two"]]), new Map([[2, "two"], [1, "one"]])],
    [
      {
        a: 1,
        b: 2
      },
      jestExpect.objectContaining({
        a: 1
      })
    ],
    [[1, 2, 3], jestExpect.arrayContaining([2, 3])],
    ["abcd", jestExpect.stringContaining("bc")],
    ["abcd", jestExpect.stringMatching("bc")],
    [true, jestExpect.anything()],
    [() => {}, jestExpect.any(Function)],
    [
      {
        a: 1,
        b: function b() {},
        c: true
      },
      {
        a: 1,
        b: jestExpect.any(Function),
        c: jestExpect.anything()
      }
    ],
    [
      "Alice",
      {
        asymmetricMatch: function asymmetricMatch(who) {
          return who === "Alice" || who === "Bob";
        }
      }
    ]
  ].forEach(([a, b]) => {
    test(`{pass: false} expect(${stringify(a)}).not.toEqual(${stringify(
      b
    )})`, () => {
      expect(() => jestExpect(a).not.toEqual(b)).toThrowErrorMatchingSnapshot();
    });
  });
  test("assertion error matcherResult property contains matcher name, expected and actual values", () => {
    const actual = {
      a: 1
    };
    const expected = {
      a: 2
    };

    try {
      jestExpect(actual).toEqual(expected);
    } catch (error) {
      expect(error.matcherResult).toEqual(
        expect.objectContaining({
          actual,
          expected,
          name: "toEqual"
        })
      );
    }
  });
}
