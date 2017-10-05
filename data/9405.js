{
  var e = {};
  (e.get = function() {
    return Si;
  }),
    Object.defineProperty(t, "config", e),
    (t.util = {
      warn: Li,
      extend: y,
      mergeOptions: z,
      defineReactive: N
    }),
    (t.set = M),
    (t.delete = I),
    (t.nextTick = Zi),
    (t.options = Object.create(null)),
    Oi.forEach(function(e) {
      t.options[e + "s"] = Object.create(null);
    }),
    (t.options._base = t),
    y(t.options.components, jo),
    Ce(t),
    we(t),
    xe(t),
    Oe(t);
}
