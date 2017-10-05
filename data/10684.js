{
  if (((t.isRootInsert = !a), !u(t, r, o, i))) {
    var s = t.data,
      c = t.children,
      l = t.tag;
    e(l)
      ? ((t.elm = t.ns ? T.createElementNS(t.ns, l) : T.createElement(l, t)),
        y(t),
        v(t, c, r),
        e(s) && m(t, r),
        d(o, t.elm, i))
      : n(t.isComment)
        ? ((t.elm = T.createComment(t.text)), d(o, t.elm, i))
        : ((t.elm = T.createTextNode(t.text)), d(o, t.elm, i));
  }
}
