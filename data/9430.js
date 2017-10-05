{
  for (var o, a = t; a.componentInstance; )
    if (
      ((a = a.componentInstance._vnode),
      e((o = a.data)) && e((o = o.transition)))
    ) {
      for (o = 0; o < S.activate.length; ++o) S.activate[o](ia, a);

      n.push(a);
      break;
    }

  d(r, t.elm, i);
}
