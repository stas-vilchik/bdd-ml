{
  if (r !== i) {
    var s = (i.elm = r.elm);
    if (n(r.isAsyncPlaceholder))
      e(i.asyncFactory.resolved) ? k(r.elm, i, o) : (i.isAsyncPlaceholder = !0);
    else if (
      n(i.isStatic) &&
      n(r.isStatic) &&
      i.key === r.key &&
      (n(i.isCloned) || n(i.isOnce))
    )
      i.componentInstance = r.componentInstance;
    else {
      var c,
        u = i.data;
      e(u) && e((c = u.hook)) && e((c = c.prepatch)) && c(r, i);
      var l = r.children,
        f = i.children;

      if (e(u) && h(i)) {
        for (c = 0; c < S.update.length; ++c) S.update[c](r, i);

        e((c = u.hook)) && e((c = c.update)) && c(r, i);
      }

      t(i.text)
        ? e(l) && e(f)
          ? l !== f && C(s, l, f, o, a)
          : e(f)
            ? (e(r.text) && j.setTextContent(s, ""),
              g(s, null, f, 0, f.length - 1, o))
            : e(l)
              ? b(s, l, 0, l.length - 1)
              : e(r.text) && j.setTextContent(s, "")
        : r.text !== i.text && j.setTextContent(s, i.text),
        e(u) && e((c = u.hook)) && e((c = c.postpatch)) && c(r, i);
    }
  }
}
