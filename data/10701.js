{
  if (n(r.isComment) && e(r.asyncFactory))
    return (r.elm = t), (r.isAsyncPlaceholder = !0), !0;
  r.elm = t;
  var i = r.tag,
    a = r.data,
    s = r.children;
  if (
    e(a) &&
    (e((O = a.hook)) && e((O = O.init)) && O(r, !0),
    e((O = r.componentInstance)))
  )
    return l(r, o), !0;

  if (e(i)) {
    if (e(s))
      if (t.hasChildNodes()) {
        if (e((O = a)) && e((O = O.domProps)) && e((O = O.innerHTML))) {
          if (O !== t.innerHTML) return !1;
        } else {
          for (var c = !0, u = t.firstChild, f = 0; f < s.length; f++) {
            if (!u || !k(u, s[f], o)) {
              c = !1;
              break;
            }

            u = u.nextSibling;
          }

          if (!c || u) return !1;
        }
      } else v(r, s, o);
    if (e(a))
      for (var p in a)
        if (!I(p)) {
          m(r, o);
          break;
        }
  } else t.data !== r.text && (t.data = r.text);

  return !0;
}
