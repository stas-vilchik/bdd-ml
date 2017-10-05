{
  if (((n.ns = r), "foreignObject" !== n.tag && e(n.children)))
    for (var i = 0, o = n.children.length; i < o; i++) {
      var a = n.children[i];
      e(a.tag) && t(a.ns) && oe(a, r);
    }
}
