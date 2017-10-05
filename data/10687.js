{
  for (var i, a = t; a.componentInstance; )
    if (
      ((a = a.componentInstance._vnode),
      e((i = a.data)) && e((i = i.transition)))
    ) {
      for (i = 0; i < E.activate.length; ++i) E.activate[i](Ao, a);

      n.push(a);
      break;
    }

  d(r, t.elm, o);
}
