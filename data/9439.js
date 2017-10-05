{
  if (e(n) || e(t.data)) {
    var r,
      i = S.remove.length + 1;

    for (
      e(n) ? (n.listeners += i) : (n = a(t.elm, i)),
        e((r = t.componentInstance)) &&
          e((r = r._vnode)) &&
          e(r.data) &&
          $(r, n),
        r = 0;
      r < S.remove.length;
      ++r
    )
      S.remove[r](t, n);

    e((r = t.data.hook)) && e((r = r.remove)) ? r(t, n) : n();
  } else s(t.elm);
}
