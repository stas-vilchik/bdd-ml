{
  if (((n.ns = r), "foreignObject" !== n.tag && e(n.children)))
    for (var o = 0, i = n.children.length; o < i; o++) {
      var a = n.children[o];
      e(a.tag) && t(a.ns) && ie(a, r);
    }
}
