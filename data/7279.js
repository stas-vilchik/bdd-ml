{
  var allTags = [].concat(specialTags, formattingTags, ["mysterytag"]);
  allTags.forEach(function(tag) {
    expect(validateDOMNesting.isTagValidInContext(tag, null)).toBe(true);
  });
}
