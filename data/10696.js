{
  if (e(n) || e(t.data)) {
    var r,
      o = E.remove.length + 1;

    for (
      e(n) ? (n.listeners += o) : (n = a(t.elm, o)),
        e((r = t.componentInstance)) &&
          e((r = r._vnode)) &&
          e(r.data) &&
          C(r, n),
        r = 0;
      r < E.remove.length;
      ++r
    )
      E.remove[r](t, n);

    e((r = t.data.hook)) && e((r = r.remove)) ? r(t, n) : n();
  } else s(t.elm);
}
