{
  if (e(r) && e(r.__ob__)) return lo();
  if ((e(r) && e(r.is) && (n = r.is), !n)) return lo();
  Array.isArray(i) &&
    "function" == typeof i[0] &&
    (((r = r || {}).scopedSlots = {
      default: i[0]
    }),
    (i.length = 0)),
    o === To ? (i = at(i)) : o === Oo && (i = ot(i));
  var a, s;

  if ("string" == typeof n) {
    var c;
    (s = (t.$vnode && t.$vnode.ns) || Si.getTagNamespace(n)),
      (a = Si.isReservedTag(n)
        ? new so(Si.parsePlatformTagName(n), r, i, void 0, void 0, t)
        : e((c = K(t.$options, "components", n)))
          ? Qt(c, r, t, i, n)
          : new so(n, r, i, void 0, void 0, t));
  } else a = Qt(n, r, t, i);

  return e(a) ? (s && oe(a, s), a) : lo();
}
