{
  if (e(r) && e(r.__ob__)) return Mr();
  if ((e(r) && e(r.is) && (n = r.is), !n)) return Mr();
  Array.isArray(o) &&
    "function" == typeof o[0] &&
    (((r = r || {}).scopedSlots = {
      default: o[0]
    }),
    (o.length = 0)),
    i === Yr ? (o = at(o)) : i === Xr && (o = it(o));
  var a, s;

  if ("string" == typeof n) {
    var c;
    (s = (t.$vnode && t.$vnode.ns) || er.getTagNamespace(n)),
      (a = er.isReservedTag(n)
        ? new Dr(er.parsePlatformTagName(n), r, o, void 0, void 0, t)
        : e((c = W(t.$options, "components", n)))
          ? Xt(c, r, t, o, n)
          : new Dr(n, r, o, void 0, void 0, t));
  } else a = Xt(n, r, t, o);

  return e(a) ? (s && ie(a, s), a) : Mr();
}
