{
  it("should trim spaces", function() {
    expect(trim("  foo  ")).toEqual("foo");
  });
  it("should trim tabs", function() {
    expect(trim("\tfoo\t")).toEqual("foo");
  });
}
