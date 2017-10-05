{
  if (!Mi) return !0;
  if (Xo(t)) return !1;
  if (((t = t.toLowerCase()), null != ta[t])) return ta[t];
  var e = document.createElement(t);
  return t.indexOf("-") > -1
    ? (ta[t] =
        e.constructor === window.HTMLUnknownElement ||
        e.constructor === window.HTMLElement)
    : (ta[t] = /HTMLUnknownElement/.test(e.toString()));
}
