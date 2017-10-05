{
  var t = o[o.length - 1],
    e = t.children[t.children.length - 1];
  e && 3 === e.type && " " === e.text && !c && t.children.pop(),
    (o.length -= 1),
    (i = o[o.length - 1]),
    n(t);
}
