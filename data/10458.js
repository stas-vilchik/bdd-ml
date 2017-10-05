{
  var n,
    r,
    o = Array.isArray(t);

  if ((o || i(t)) && Object.isExtensible(t)) {
    if (t.__ob__) {
      var a = t.__ob__.dep.id;
      if (e.has(a)) return;
      e.add(a);
    }

    if (o) for (n = t.length; n--; ) Pt(t[n], e);
    else for (n = (r = Object.keys(t)).length; n--; ) Pt(t[r[n]], e);
  }
}
