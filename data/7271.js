{
  var quoteAttributeValueForBrowser = require("quoteAttributeValueForBrowser");

  it("should escape boolean to string", () => {
    expect(quoteAttributeValueForBrowser(true)).toBe('"true"');
    expect(quoteAttributeValueForBrowser(false)).toBe('"false"');
  });
  it("should escape object to string", () => {
    var escaped = quoteAttributeValueForBrowser({
      toString: function() {
        return "ponys";
      }
    });
    expect(escaped).toBe('"ponys"');
  });
  it("should escape number to string", () => {
    expect(quoteAttributeValueForBrowser(42)).toBe('"42"');
  });
  it("should escape string", () => {
    var escaped = quoteAttributeValueForBrowser(
      "<script type='' src=\"\"></script>"
    );
    expect(escaped).not.toContain("<");
    expect(escaped).not.toContain(">");
    expect(escaped).not.toContain("'");
    expect(escaped.substr(1, -1)).not.toContain('"');
    escaped = quoteAttributeValueForBrowser("&");
    expect(escaped).toBe('"&amp;"');
  });
}
