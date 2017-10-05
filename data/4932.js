{
  test("dont throw error when undefined", () => {
    expect(() => {
      ensureNoExpected(undefined);
    }).not.toThrow();
  });
  test("throws error when is not undefined", () => {
    expect(() => {
      ensureNoExpected({
        a: 1
      });
    }).toThrow("Matcher does not accept any arguments");
  });
  test("throws error when is not undefined with matcherName", () => {
    expect(() => {
      ensureNoExpected(
        {
          a: 1
        },
        ".toBeDefined"
      );
    }).toThrow("Matcher does not accept any arguments");
  });
}
