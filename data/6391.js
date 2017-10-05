{
  beforeEach(() => {
    oldEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "";
  });
  afterEach(() => {
    process.env.NODE_ENV = oldEnv;
  });
  it("should wrap warning calls", () => {
    compare(
      "warning(condition, 'a %s b', 'c');",
      "__DEV__ ? warning(condition, 'a %s b', 'c') : void 0;"
    );
  });
  it("should not wrap invariant calls", () => {
    compare(
      "invariant(condition, 'a %s b', 'c');",
      "invariant(condition, 'a %s b', 'c');"
    );
  });
}
