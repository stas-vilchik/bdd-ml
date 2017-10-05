{
  expect(isAbsoluteURL("https://api.github.com/users")).toBe(true);
  expect(isAbsoluteURL("custom-scheme-v1.0://example.com/")).toBe(true);
  expect(isAbsoluteURL("HTTP://example.com/")).toBe(true);
}
