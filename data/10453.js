{
  Hr = !0;
  var t, e;

  for (
    Rr.sort(function(t, e) {
      return t.id - e.id;
    }),
      zr = 0;
    zr < Rr.length;
    zr++
  )
    (e = (t = Rr[zr]).id), (Vr[e] = null), t.run();

  var n = Ur.slice(),
    r = Rr.slice();
  St(), It(n), jt(r), br && er.devtools && br.emit("flush");
}
