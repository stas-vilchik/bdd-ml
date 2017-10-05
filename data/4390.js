{
  it("does not throw", () => {
    jestExpect.assertions(2);
    jestExpect("a").not.toBe("b");
    jestExpect("a").toBe("a");
  });
  it("redeclares different assertion count", () => {
    jestExpect.assertions(3);
    jestExpect("a").not.toBe("b");
    jestExpect("a").toBe("a");
    jestExpect.assertions(2);
  });
  it("expects no assertions", () => {
    jestExpect.assertions(0);
  });
}
