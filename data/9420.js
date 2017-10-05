{
  if (
    ((Ho = Ho || document.createElement("div").style),
    "filter" !== (t = bi(t)) && t in Ho)
  )
    return t;

  for (
    var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0;
    n < ba.length;
    n++
  ) {
    var r = ba[n] + e;
    if (r in Ho) return r;
  }
}
