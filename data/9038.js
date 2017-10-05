{
  var o = new Qi(),
    a = Object.getOwnPropertyDescriptor(t, e);

  if (!a || !1 !== a.configurable) {
    var s = a && a.get,
      c = a && a.set,
      u = !i && L(n);
    Object.defineProperty(t, e, {
      enumerable: !0,
      configurable: !0,
      get: function() {
        var e = s ? s.call(t) : n;
        return (
          Qi.target &&
            (o.depend(), u && (u.dep.depend(), Array.isArray(e) && D(e))),
          e
        );
      },
      set: function(e) {
        var r = s ? s.call(t) : n;
        e === r ||
          (e !== e && r !== r) ||
          (c ? c.call(t, e) : (n = e), (u = !i && L(e)), o.notify());
      }
    });
  }
}
