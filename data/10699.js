{
  if (r !== o) {
    var s = (o.elm = r.elm);
    if (n(r.isAsyncPlaceholder))
      e(o.asyncFactory.resolved) ? k(r.elm, o, i) : (o.isAsyncPlaceholder = !0);
    else if (
      n(o.isStatic) &&
      n(r.isStatic) &&
      o.key === r.key &&
      (n(o.isCloned) || n(o.isOnce))
    )
      o.componentInstance = r.componentInstance;
    else {
      var c,
        u = o.data;
      e(u) && e((c = u.hook)) && e((c = c.prepatch)) && c(r, o);
      var l = r.children,
        f = o.children;

      if (e(u) && h(o)) {
        for (c = 0; c < E.update.length; ++c) E.update[c](r, o);

        e((c = u.hook)) && e((c = c.update)) && c(r, o);
      }

      t(o.text)
        ? e(l) && e(f)
          ? l !== f && A(s, l, f, i, a)
          : e(f)
            ? (e(r.text) && T.setTextContent(s, ""),
              _(s, null, f, 0, f.length - 1, i))
            : e(l)
              ? b(s, l, 0, l.length - 1)
              : e(r.text) && T.setTextContent(s, "")
        : r.text !== o.text && T.setTextContent(s, o.text),
        e(u) && e((c = u.hook)) && e((c = c.postpatch)) && c(r, o);
    }
  }
}
