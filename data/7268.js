{
  var escaped = escapeTextContentForBrowser({
    toString: function() {
      return "ponys";
    }
  });
  expect(escaped).toBe("ponys");
}
