{
  var i = r.data,
    o = n.data;

  if (!(t(i.staticStyle) && t(i.style) && t(o.staticStyle) && t(o.style))) {
    var a,
      s,
      c = r.elm,
      u = o.staticStyle,
      l = o.normalizedStyle || o.style || {},
      f = u || l,
      p = jn(r.data.style) || {};
    r.data.normalizedStyle = e(p.__ob__) ? y({}, p) : p;
    var d = Ln(r, !0);

    for (s in f) t(d[s]) && _a(c, s, "");

    for (s in d) (a = d[s]) !== f[s] && _a(c, s, null == a ? "" : a);
  }
}
