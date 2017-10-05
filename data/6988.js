{
  var r = [];

  for (var i = 0, s; (s = scopeSelectorList[i]); i++) {
    r.push(this.applySimpleSelectorScope(selector, s));
  }

  return r.join(", ");
}
