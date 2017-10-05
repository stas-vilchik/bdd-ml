{
  var n,
    r,
    o = t.data;
  if (e(o))
    for (
      e((n = o.hook)) && e((n = n.destroy)) && n(t), n = 0;
      n < E.destroy.length;
      ++n
    )
      E.destroy[n](t);
  if (e((n = t.children)))
    for (r = 0; r < t.children.length; ++r) g(t.children[r]);
}
