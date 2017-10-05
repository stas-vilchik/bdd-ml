{
  if (((t.isRootInsert = !a), !u(t, r, i, o))) {
    var s = t.data,
      c = t.children,
      l = t.tag;
    e(l)
      ? ((t.elm = t.ns ? j.createElementNS(t.ns, l) : j.createElement(l, t)),
        y(t),
        v(t, c, r),
        e(s) && m(t, r),
        d(i, t.elm, o))
      : n(t.isComment)
        ? ((t.elm = j.createComment(t.text)), d(i, t.elm, o))
        : ((t.elm = j.createTextNode(t.text)), d(i, t.elm, o));
  }
}
