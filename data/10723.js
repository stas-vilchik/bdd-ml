{
  if (!ar) return !0;
  if (yo(t)) return !1;
  if (((t = t.toLowerCase()), null != _o[t])) return _o[t];
  var e = document.createElement(t);
  return t.indexOf("-") > -1
    ? (_o[t] =
        e.constructor === window.HTMLUnknownElement ||
        e.constructor === window.HTMLElement)
    : (_o[t] = /HTMLUnknownElement/.test(e.toString()));
}
