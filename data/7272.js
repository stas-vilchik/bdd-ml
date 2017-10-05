{
  expect(quoteAttributeValueForBrowser(true)).toBe('"true"');
  expect(quoteAttributeValueForBrowser(false)).toBe('"false"');
}
