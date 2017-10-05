{
  expect(keyToTestName("abc cde 12")).toBe("abc cde");
  expect(keyToTestName("abc cde   12")).toBe("abc cde  ");
  expect(() => keyToTestName("abc cde")).toThrowError(
    "Snapshot keys must end with a number."
  );
}
