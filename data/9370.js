{
  var e = "&" === t.charAt(0),
    n = "~" === (t = e ? t.slice(1) : t).charAt(0),
    r = "!" === (t = n ? t.slice(1) : t).charAt(0);
  return {
    name: (t = r ? t.slice(1) : t),
    plain: !(e || n || r),
    once: n,
    capture: r,
    passive: e
  };
}
