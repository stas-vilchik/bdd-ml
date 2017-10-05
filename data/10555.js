{
  var o = r.data,
    i = n.data;

  if (!(t(o.staticStyle) && t(o.style) && t(i.staticStyle) && t(i.style))) {
    var a,
      s,
      c = r.elm,
      u = i.staticStyle,
      l = i.normalizedStyle || i.style || {},
      f = u || l,
      p = cn(r.data.style) || {};
    r.data.normalizedStyle = e(p.__ob__) ? y({}, p) : p;
    var d = un(r, !0);

    for (s in f) t(d[s]) && Mo(c, s, "");

    for (s in d) (a = d[s]) !== f[s] && Mo(c, s, null == a ? "" : a);
  }
}
