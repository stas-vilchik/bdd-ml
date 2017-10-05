{
  it("works with plain objects and the title has `escape` characters", () => {
    const test = {
      a: 1,
      b: "2",
      c: "three`"
    };
    expect(test).toMatchSnapshot();
    test.d = "4";
    expect(test).toMatchSnapshot();
  });
  it("is not influenced by previous counter", () => {
    const test = {
      a: 43,
      b: "43",
      c: "fourtythree"
    };
    expect(test).toMatchSnapshot();
  });
  it("cannot be used with .not", () => {
    expect(() => expect("").not.toMatchSnapshot()).toThrow(
      "Jest: `.not` cannot be used with `.toMatchSnapshot()`."
    );
  });
  it("works with \\r\\n", () => {
    expect("<div>\r\n</div>").toMatchSnapshot();
  });
}
