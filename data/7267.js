{
  expect(escapeTextContentForBrowser(true)).toBe("true");
  expect(escapeTextContentForBrowser(false)).toBe("false");
}
