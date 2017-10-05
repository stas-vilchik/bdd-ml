{
  skipOnWindows.suite();
  it("does not throw if there is an assertion", () => {
    jestExpect.hasAssertions();
    jestExpect("a").toBe("a");
  });
  it("throws if passed parameters", () => {
    jestExpect(() => {
      jestExpect.hasAssertions(2);
    }).toThrow(/does not accept any arguments/);
  });
  it("hasAssertions not leaking to global state", () => {});
}
