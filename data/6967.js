{
  cssText = cssText.replace(cssCommentRuleRe, function(match, p1) {
    return p1.slice(0, -1);
  });
  return cssText.replace(cssContentRuleRe, function(match, p1, p2, p3) {
    var rule = match.replace(p1, "").replace(p2, "");
    return p3 + rule;
  });
}
