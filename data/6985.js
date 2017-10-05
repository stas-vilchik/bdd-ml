{
  if (Array.isArray(scopeSelector)) {
    return true;
  }

  var re = this.makeScopeMatcher(scopeSelector);
  return !selector.match(re);
}
