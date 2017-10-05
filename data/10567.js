{
  var n,
    r = window.getComputedStyle(t),
    o = r[zo + "Delay"].split(", "),
    i = r[zo + "Duration"].split(", "),
    a = gn(o, i),
    s = r[qo + "Delay"].split(", "),
    c = r[qo + "Duration"].split(", "),
    u = gn(s, c),
    l = 0,
    f = 0;
  return (
    e === Bo
      ? a > 0 && ((n = Bo), (l = a), (f = i.length))
      : e === Ho
        ? u > 0 && ((n = Ho), (l = u), (f = c.length))
        : (f = (n = (l = Math.max(a, u)) > 0 ? (a > u ? Bo : Ho) : null)
            ? n === Bo ? i.length : c.length
            : 0),
    {
      type: n,
      timeout: l,
      propCount: f,
      hasTransform: n === Bo && Jo.test(r[zo + "Property"])
    }
  );
}
