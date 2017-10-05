{
  test("dont throw error when variables are numbers", () => {
    expect(() => {
      ensureNumbers(1, 2);
    }).not.toThrow();
  });
  test("throws error when expected is not a number", () => {
    expect(() => {
      ensureNumbers(1, "not_a_number");
    }).toThrow("Expected value must be a number");
  });
  test("throws error when actual is not a number", () => {
    expect(() => {
      ensureNumbers("not_a_number", 3);
    }).toThrow("Received value must be a number");
  });
}
