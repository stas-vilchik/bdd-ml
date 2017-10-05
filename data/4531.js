{
  const typedArray = new Int8Array(2);
  typedArray[0] = 0;
  typedArray[1] = 1;
  test("iterable", () => {
    const iterable = {
      *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
      }
    };
    jestExpect(iterable).toContain(2);
    jestExpect(iterable).toContainEqual(2);
    expect(() => jestExpect(iterable).not.toContain(1)).toThrowError(
      "toContain"
    );
    expect(() => jestExpect(iterable).not.toContainEqual(1)).toThrowError(
      "toContainEqual"
    );
  });
  [
    [[1, 2, 3, 4], 1],
    [["a", "b", "c", "d"], "a"],
    [[undefined, null], null],
    [[undefined, null], undefined],
    [[Symbol.for("a")], Symbol.for("a")],
    ["abcdef", "abc"],
    ["11112111", "2"],
    [new Set(["abc", "def"]), "abc"],
    [typedArray, 1]
  ].forEach(([list, v]) => {
    it(`'${stringify(list)}' contains '${stringify(v)}'`, () => {
      jestExpect(list).toContain(v);
      expect(() =>
        jestExpect(list).not.toContain(v)
      ).toThrowErrorMatchingSnapshot();
    });
  });
  [
    [[1, 2, 3], 4],
    [[null, undefined], 1],
    [[{}, []], []],
    [[{}, []], {}]
  ].forEach(([list, v]) => {
    it(`'${stringify(list)}' does not contain '${stringify(v)}'`, () => {
      jestExpect(list).not.toContain(v);
      expect(() =>
        jestExpect(list).toContain(v)
      ).toThrowErrorMatchingSnapshot();
    });
  });
  test("error cases", () => {
    expect(() => jestExpect(null).toContain(1)).toThrowErrorMatchingSnapshot();
  });
  [
    [[1, 2, 3, 4], 1],
    [["a", "b", "c", "d"], "a"],
    [[undefined, null], null],
    [[undefined, null], undefined],
    [[Symbol.for("a")], Symbol.for("a")],
    [
      [
        {
          a: "b"
        },
        {
          a: "c"
        }
      ],
      {
        a: "b"
      }
    ],
    [new Set([1, 2, 3, 4]), 1],
    [typedArray, 1]
  ].forEach(([list, v]) => {
    it(`'${stringify(list)}' contains a value equal to '${stringify(
      v
    )}'`, () => {
      jestExpect(list).toContainEqual(v);
      expect(() =>
        jestExpect(list).not.toContainEqual(v)
      ).toThrowErrorMatchingSnapshot();
    });
  });
  [
    [
      [
        {
          a: "b"
        },
        {
          a: "c"
        }
      ],
      {
        a: "d"
      }
    ]
  ].forEach(([list, v]) => {
    it(`'${stringify(list)}' does not contain a value equal to'${stringify(
      v
    )}'`, () => {
      jestExpect(list).not.toContainEqual(v);
      expect(() =>
        jestExpect(list).toContainEqual(v)
      ).toThrowErrorMatchingSnapshot();
    });
  });
  test("error cases for toContainEqual", () => {
    expect(() =>
      jestExpect(null).toContainEqual(1)
    ).toThrowErrorMatchingSnapshot();
  });
}
