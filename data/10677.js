{
  if (
    ((oo = oo || document.createElement("div").style),
    "filter" !== (t = qn(t)) && t in oo)
  )
    return t;

  for (
    var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0;
    n < No.length;
    n++
  ) {
    var r = No[n] + e;
    if (r in oo) return r;
  }
}
