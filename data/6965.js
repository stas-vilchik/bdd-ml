{
  cssText = cssText.replace(cssCommentNextSelectorRe, function(match, p1) {
    return p1.slice(0, -2) + "{";
  });
  return cssText.replace(cssContentNextSelectorRe, function(match, p1) {
    return p1 + " {";
  });
}
