{
  var n,
    r = window.getComputedStyle(t),
    i = r[Oa + "Delay"].split(", "),
    o = r[Oa + "Duration"].split(", "),
    a = Un(i, o),
    s = r[Sa + "Delay"].split(", "),
    c = r[Sa + "Duration"].split(", "),
    u = Un(s, c),
    l = 0,
    f = 0;
  return (
    e === Aa
      ? a > 0 && ((n = Aa), (l = a), (f = o.length))
      : e === ka
        ? u > 0 && ((n = ka), (l = u), (f = c.length))
        : (f = (n = (l = Math.max(a, u)) > 0 ? (a > u ? Aa : ka) : null)
            ? n === Aa ? o.length : c.length
            : 0),
    {
      type: n,
      timeout: l,
      propCount: f,
      hasTransform: n === Aa && La.test(r[Oa + "Property"])
    }
  );
}
