{
  go = !0;
  var t, e;

  for (
    vo.sort(function(t, e) {
      return t.id - e.id;
    }),
      _o = 0;
    _o < vo.length;
    _o++
  )
    (e = (t = vo[_o]).id), (mo[e] = null), t.run();

  var n = ho.slice(),
    r = vo.slice();
  Tt(), Lt(n), Et(r), Wi && Si.devtools && Wi.emit("flush");
}
