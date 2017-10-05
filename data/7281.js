{
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
}
