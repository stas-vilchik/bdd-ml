{
  var r = Bn(t, e),
    i = r.type,
    o = r.timeout,
    a = r.propCount;
  if (!i) return n();

  var s = i === Aa ? Ta : Ea,
    c = 0,
    u = function() {
      t.removeEventListener(s, l), n();
    },
    l = function(e) {
      e.target === t && ++c >= a && u();
    };

  setTimeout(function() {
    c < a && u();
  }, o + 1),
    t.addEventListener(s, l);
}
