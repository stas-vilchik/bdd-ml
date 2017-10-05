{
  for (var e = [], n = 0; n < t.length; n++) {
    var r = t[n];
    Ls.test(r.name) || ((r.name = r.name.replace(Ns, "")), e.push(r));
  }

  return e;
}
