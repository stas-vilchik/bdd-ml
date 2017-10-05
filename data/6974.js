{
  return cssText.replace(regExp, function(m, p1, p2, p3) {
    p1 = polyfillHostNoCombinator;

    if (p2) {
      var parts = p2.split(","),
        r = [];

      for (var i = 0, l = parts.length, p; i < l && (p = parts[i]); i++) {
        p = p.trim();
        r.push(partReplacer(p1, p, p3));
      }

      return r.join(",");
    } else {
      return p1 + p3;
    }
  });
}
