{
  var r = "",
    m;

  while ((m = cssCommentUnscopedRuleRe.exec(cssText))) {
    r += m[1].slice(0, -1) + "\n\n";
  }

  while ((m = cssContentUnscopedRuleRe.exec(cssText))) {
    r += m[0].replace(m[2], "").replace(m[1], m[3]) + "\n\n";
  }

  return r;
}
