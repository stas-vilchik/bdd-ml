{
  [
    [[], "[]"],
    [{}, "{}"],
    [1, "1"],
    [0, "0"],
    [1.5, "1.5"],
    [null, "null"],
    [undefined, "undefined"],
    ["abc", '"abc"'],
    [Symbol.for("abc"), "Symbol(abc)"],
    [NaN, "NaN"],
    [Infinity, "Infinity"],
    [-Infinity, "-Infinity"],
    [/ab\.c/gi, "/ab\\.c/gi"]
  ].forEach(([v, s]) => {
    test(stringify(v), () => {
      expect(stringify(v)).toBe(s);
    });
  });
  test("circular references", () => {
    const a = {};
    a.a = a;
    expect(stringify(a)).toBe('{"a": [Circular]}');
  });
  test("toJSON error", () => {
    const evil = {
      toJSON() {
        throw new Error("Nope.");
      }
    };
    expect(stringify(evil)).toBe('{"toJSON": [Function toJSON]}');
    expect(
      stringify({
        a: {
          b: {
            evil
          }
        }
      })
    ).toBe('{"a": {"b": {"evil": {"toJSON": [Function toJSON]}}}}');

    function Evil() {}

    Evil.toJSON = evil.toJSON;
    expect(stringify(Evil)).toBe("[Function Evil]");
  });
  test("toJSON errors when comparing two objects", () => {
    function toJSON() {
      throw new Error("Nope.");
    }

    const evilA = {
      a: 1,
      toJSON
    };
    const evilB = {
      b: 1,
      toJSON
    };
    expect(() => expect(evilA).toEqual(evilB)).toThrowErrorMatchingSnapshot();
  });
  test("reduces maxDepth if stringifying very large objects", () => {
    const big = {
      a: 1,
      b: {}
    };
    const small = {
      a: 1,
      b: {}
    };

    for (let i = 0; i < 10000; i += 1) {
      big.b[i] = "test";
    }

    for (let i = 0; i < 10; i += 1) {
      small.b[i] = "test";
    }

    expect(stringify(big)).toMatchSnapshot();
    expect(stringify(small)).toMatchSnapshot();
  });
}
