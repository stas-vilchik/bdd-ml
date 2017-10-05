{
  if (e)
    if (a(e)) {
      var n = (t.on = t.on ? y({}, t.on) : {});

      for (var r in e) {
        var o = n[r],
          i = e[r];
        n[r] = o ? [].concat(i, o) : i;
      }
    } else;
  return t;
}
