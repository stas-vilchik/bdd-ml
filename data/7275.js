{
  var escaped = quoteAttributeValueForBrowser(
    "<script type='' src=\"\"></script>"
  );
  expect(escaped).not.toContain("<");
  expect(escaped).not.toContain(">");
  expect(escaped).not.toContain("'");
  expect(escaped.substr(1, -1)).not.toContain('"');
  escaped = quoteAttributeValueForBrowser("&");
  expect(escaped).toBe('"&amp;"');
}
