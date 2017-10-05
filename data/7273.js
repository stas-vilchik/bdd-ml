{
  var escaped = quoteAttributeValueForBrowser({
    toString: function() {
      return "ponys";
    }
  });
  expect(escaped).toBe('"ponys"');
}
