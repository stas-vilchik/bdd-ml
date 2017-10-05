{
  var n = t.tagName,
    i = t.unarySlash;
  s && ("p" === o && Wa(n) && r(o), u(n) && o === n && r(n));

  for (
    var l = c(n) || !!i, f = t.attrs.length, p = new Array(f), d = 0;
    d < f;
    d++
  ) {
    var v = t.attrs[d];
    as &&
      -1 === v[0].indexOf('""') &&
      ("" === v[3] && delete v[3],
      "" === v[4] && delete v[4],
      "" === v[5] && delete v[5]);
    var h = v[3] || v[4] || v[5] || "";
    p[d] = {
      name: v[1],
      value: pr(h, e.shouldDecodeNewlines)
    };
  }

  l ||
    (a.push({
      tag: n,
      lowerCasedTag: n.toLowerCase(),
      attrs: p
    }),
    (o = n)),
    e.start && e.start(n, p, l, t.start, t.end);
}
