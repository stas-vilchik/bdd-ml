{
  t.hook || (t.hook = {});

  for (var e = 0; e < Qr.length; e++) {
    var n = Qr[e],
      r = t.hook[n],
      o = Zr[n];
    t.hook[n] = r ? ee(o, r) : o;
  }
}
