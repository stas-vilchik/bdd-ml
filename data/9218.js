{
  if (!t(n.data.domProps) || !t(r.data.domProps)) {
    var i,
      o,
      a = r.elm,
      s = n.data.domProps || {},
      c = r.data.domProps || {};
    e(c.__ob__) && (c = r.data.domProps = y({}, c));

    for (i in s) t(c[i]) && (a[i] = "");

    for (i in c)
      if (
        ((o = c[i]),
        ("textContent" !== i && "innerHTML" !== i) ||
          (r.children && (r.children.length = 0), o !== s[i]))
      )
        if ("value" === i) {
          a._value = o;
          var u = t(o) ? "" : String(o);
          On(a, r, u) && (a.value = u);
        } else a[i] = o;
  }
}
