{
  var n = new so(
    t.tag,
    t.data,
    t.children,
    t.text,
    t.elm,
    t.context,
    t.componentOptions,
    t.asyncFactory
  );
  return (
    (n.ns = t.ns),
    (n.isStatic = t.isStatic),
    (n.key = t.key),
    (n.isComment = t.isComment),
    (n.isCloned = !0),
    e && t.children && (n.children = Q(t.children)),
    n
  );
}
