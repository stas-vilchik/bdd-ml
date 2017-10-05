{
  var n,
    r,
    i = Array.isArray(t);

  if ((i || o(t)) && Object.isExtensible(t)) {
    if (t.__ob__) {
      var a = t.__ob__.dep.id;
      if (e.has(a)) return;
      e.add(a);
    }

    if (i) for (n = t.length; n--; ) It(t[n], e);
    else for (n = (r = Object.keys(t)).length; n--; ) It(t[r[n]], e);
  }
}
