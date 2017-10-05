{
  beforeEach(() => {
    jest.resetModules();
    validateDOMNesting = require("validateDOMNesting");
  });
  it("allows any tag with no context", () => {
    var allTags = [].concat(specialTags, formattingTags, ["mysterytag"]);
    allTags.forEach(function(tag) {
      expect(validateDOMNesting.isTagValidInContext(tag, null)).toBe(true);
    });
  });
  it("allows valid nestings", () => {
    expect(isTagStackValid(["table", "tbody", "tr", "td", "b"])).toBe(true);
    expect(isTagStackValid(["body", "datalist", "option"])).toBe(true);
    expect(isTagStackValid(["div", "a", "object", "a"])).toBe(true);
    expect(isTagStackValid(["div", "p", "button", "p"])).toBe(true);
    expect(isTagStackValid(["p", "svg", "foreignObject", "p"])).toBe(true);
    expect(isTagStackValid(["html", "body", "div"])).toBe(true);
    expect(isTagStackValid(["div", "ul", "ul", "li"])).toBe(true);
    expect(isTagStackValid(["div", "label", "div"])).toBe(true);
    expect(isTagStackValid(["div", "ul", "li", "section", "li"])).toBe(true);
    expect(isTagStackValid(["div", "ul", "li", "dd", "li"])).toBe(true);
  });
  it("prevents problematic nestings", () => {
    expect(isTagStackValid(["a", "a"])).toBe(false);
    expect(isTagStackValid(["form", "form"])).toBe(false);
    expect(isTagStackValid(["p", "p"])).toBe(false);
    expect(isTagStackValid(["table", "tr"])).toBe(false);
    expect(isTagStackValid(["div", "ul", "li", "div", "li"])).toBe(false);
    expect(isTagStackValid(["div", "html"])).toBe(false);
    expect(isTagStackValid(["body", "body"])).toBe(false);
    expect(isTagStackValid(["svg", "foreignObject", "body", "p"])).toBe(false);
  });
}
