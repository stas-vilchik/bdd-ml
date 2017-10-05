{
  var e = {};
  (e.get = function() {
    return er;
  }),
    Object.defineProperty(t, "config", e),
    (t.util = {
      warn: or,
      extend: y,
      mergeOptions: z,
      defineReactive: D
    }),
    (t.set = L),
    (t.delete = P),
    (t.nextTick = Ar),
    (t.options = Object.create(null)),
    Yn.forEach(function(e) {
      t.options[e + "s"] = Object.create(null);
    }),
    (t.options._base = t),
    y(t.options.components, no),
    Ae(t),
    we(t),
    $e(t),
    Oe(t);
}
