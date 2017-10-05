{
  expect(isTagStackValid(["a", "a"])).toBe(false);
  expect(isTagStackValid(["form", "form"])).toBe(false);
  expect(isTagStackValid(["p", "p"])).toBe(false);
  expect(isTagStackValid(["table", "tr"])).toBe(false);
  expect(isTagStackValid(["div", "ul", "li", "div", "li"])).toBe(false);
  expect(isTagStackValid(["div", "html"])).toBe(false);
  expect(isTagStackValid(["body", "body"])).toBe(false);
  expect(isTagStackValid(["svg", "foreignObject", "body", "p"])).toBe(false);
}
