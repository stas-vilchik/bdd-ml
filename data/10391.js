{
  var i = new $r(),
    a = Object.getOwnPropertyDescriptor(t, e);

  if (!a || !1 !== a.configurable) {
    var s = a && a.get,
      c = a && a.set,
      u = !o && I(n);
    Object.defineProperty(t, e, {
      enumerable: !0,
      configurable: !0,
      get: function() {
        var e = s ? s.call(t) : n;
        return (
          $r.target &&
            (i.depend(), u && (u.dep.depend(), Array.isArray(e) && M(e))),
          e
        );
      },
      set: function(e) {
        var r = s ? s.call(t) : n;
        e === r ||
          (e !== e && r !== r) ||
          (c ? c.call(t, e) : (n = e), (u = !o && I(e)), i.notify());
      }
    });
  }
}
