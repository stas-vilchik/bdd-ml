{
  var escaped = escapeTextContentForBrowser(
    "<script type='' src=\"\"></script>"
  );
  expect(escaped).not.toContain("<");
  expect(escaped).not.toContain(">");
  expect(escaped).not.toContain("'");
  expect(escaped).not.toContain('"');
  escaped = escapeTextContentForBrowser("&");
  expect(escaped).toBe("&amp;");
}
