{
  var n,
    r,
    i = t.data;
  if (e(i))
    for (
      e((n = i.hook)) && e((n = n.destroy)) && n(t), n = 0;
      n < S.destroy.length;
      ++n
    )
      S.destroy[n](t);
  if (e((n = t.children)))
    for (r = 0; r < t.children.length; ++r) _(t.children[r]);
}
