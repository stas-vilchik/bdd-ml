{
  if (Array.isArray(t)) {
    var r = [];
    (n = Array.isArray(n) ? n : [n]), (e = Array.isArray(e) ? e : [e]);

    for (var i = 0; i < t.length; i++)
      (e.indexOf(t[i]) >= 0 || n.indexOf(t[i]) < 0) && r.push(t[i]);

    return r;
  }

  return t;
}
