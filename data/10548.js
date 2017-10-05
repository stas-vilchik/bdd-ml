{
  if (!t(n.data.domProps) || !t(r.data.domProps)) {
    var o,
      i,
      a = r.elm,
      s = n.data.domProps || {},
      c = r.data.domProps || {};
    e(c.__ob__) && (c = r.data.domProps = y({}, c));

    for (o in s) t(c[o]) && (a[o] = "");

    for (o in c)
      if (
        ((i = c[o]),
        ("textContent" !== o && "innerHTML" !== o) ||
          (r.children && (r.children.length = 0), i !== s[o]))
      )
        if ("value" === o) {
          a._value = i;
          var u = t(i) ? "" : String(i);
          rn(a, r, u) && (a.value = u);
        } else a[o] = i;
  }
}
