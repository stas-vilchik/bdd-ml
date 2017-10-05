{
  if (e)
    if (a(e)) {
      var n = (t.on = t.on ? y({}, t.on) : {});

      for (var r in e) {
        var i = n[r],
          o = e[r];
        n[r] = i ? [].concat(o, i) : o;
      }
    } else;
  return t;
}
