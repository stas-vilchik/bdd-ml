{
  it("should support StringLiteral", () => {
    expect(parseAndEval(`'foobar'`)).toBe("foobar");
    expect(parseAndEval(`'yowassup'`)).toBe("yowassup");
  });
  it("should support string concat (`+`)", () => {
    expect(parseAndEval(`'foo ' + 'bar'`)).toBe("foo bar");
  });
  it("should throw when it finds other types", () => {
    expect(() => parseAndEval(`'foo ' + true`)).toThrowError(
      /Unsupported type/
    );
    expect(() => parseAndEval(`'foo ' + 3`)).toThrowError(/Unsupported type/);
    expect(() => parseAndEval(`'foo ' + null`)).toThrowError(
      /Unsupported type/
    );
    expect(() => parseAndEval(`'foo ' + undefined`)).toThrowError(
      /Unsupported type/
    );
  });
}
