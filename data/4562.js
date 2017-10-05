{
  [["foo", "foo"], ["Foo bar", /^foo/i]].forEach(([n1, n2]) => {
    it(`{pass: true} expect(${n1}).toMatch(${n2})`, () => {
      jestExpect(n1).toMatch(n2);
      expect(() =>
        jestExpect(n1).not.toMatch(n2)
      ).toThrowErrorMatchingSnapshot();
    });
  });
  [["bar", "foo"], ["bar", /foo/]].forEach(([n1, n2]) => {
    it(`throws: [${n1}, ${n2}]`, () => {
      expect(() => jestExpect(n1).toMatch(n2)).toThrowErrorMatchingSnapshot();
    });
  });
  [
    [1, "foo"],
    [{}, "foo"],
    [[], "foo"],
    [true, "foo"],
    [/foo/i, "foo"],
    [() => {}, "foo"],
    [undefined, "foo"]
  ].forEach(([n1, n2]) => {
    it(
      "throws if non String actual value passed:" +
        ` [${stringify(n1)}, ${stringify(n2)}]`,
      () => {
        expect(() => jestExpect(n1).toMatch(n2)).toThrowErrorMatchingSnapshot();
      }
    );
  });
  [
    ["foo", 1],
    ["foo", {}],
    ["foo", []],
    ["foo", true],
    ["foo", () => {}],
    ["foo", undefined]
  ].forEach(([n1, n2]) => {
    it(
      `throws if non String/RegExp expected value passed:` +
        ` [${stringify(n1)}, ${stringify(n2)}]`,
      () => {
        expect(() => jestExpect(n1).toMatch(n2)).toThrowErrorMatchingSnapshot();
      }
    );
  });
  it("escapes strings properly", () => {
    jestExpect("this?: throws").toMatch("this?: throws");
  });
}
