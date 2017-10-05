{
  var r = _n(t, e),
    o = r.type,
    i = r.timeout,
    a = r.propCount;

  if (!o) return n();

  var s = o === Bo ? Wo : Ko,
    c = 0,
    u = function() {
      t.removeEventListener(s, l), n();
    },
    l = function(e) {
      e.target === t && ++c >= a && u();
    };

  setTimeout(function() {
    c < a && u();
  }, i + 1),
    t.addEventListener(s, l);
}
