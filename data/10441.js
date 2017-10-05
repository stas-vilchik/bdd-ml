{
  var n = {};
  if (!t) return n;

  for (var r = [], o = 0, i = t.length; o < i; o++) {
    var a = t[o],
      s = a.data;
    if (
      (s && s.attrs && s.attrs.slot && delete s.attrs.slot,
      (a.context !== e && a.functionalContext !== e) || !s || null == s.slot)
    )
      r.push(a);
    else {
      var c = a.data.slot,
        u = n[c] || (n[c] = []);
      "template" === a.tag ? u.push.apply(u, a.children) : u.push(a);
    }
  }

  return r.every(gt) || (n.default = r), n;
}
