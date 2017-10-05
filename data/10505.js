{
  if (Array.isArray(t)) {
    var r = [];
    (n = Array.isArray(n) ? n : [n]), (e = Array.isArray(e) ? e : [e]);

    for (var o = 0; o < t.length; o++)
      (e.indexOf(t[o]) >= 0 || n.indexOf(t[o]) < 0) && r.push(t[o]);

    return r;
  }

  return t;
}
