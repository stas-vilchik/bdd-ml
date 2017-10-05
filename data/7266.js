{
  var escapeTextContentForBrowser = require("escapeTextContentForBrowser");

  it("should escape boolean to string", () => {
    expect(escapeTextContentForBrowser(true)).toBe("true");
    expect(escapeTextContentForBrowser(false)).toBe("false");
  });
  it("should escape object to string", () => {
    var escaped = escapeTextContentForBrowser({
      toString: function() {
        return "ponys";
      }
    });
    expect(escaped).toBe("ponys");
  });
  it("should escape number to string", () => {
    expect(escapeTextContentForBrowser(42)).toBe("42");
  });
  it("should escape string", () => {
    var escaped = escapeTextContentForBrowser(
      "<script type='' src=\"\"></script>"
    );
    expect(escaped).not.toContain("<");
    expect(escaped).not.toContain(">");
    expect(escaped).not.toContain("'");
    expect(escaped).not.toContain('"');
    escaped = escapeTextContentForBrowser("&");
    expect(escaped).toBe("&amp;");
  });
}
