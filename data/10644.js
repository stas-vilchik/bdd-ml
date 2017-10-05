{
  var e = {};

  e.get = function() {
    return this._data;
  };

  var n = {};
  (n.get = function() {
    return this._props;
  }),
    Object.defineProperty(t.prototype, "$data", e),
    Object.defineProperty(t.prototype, "$props", n),
    (t.prototype.$set = L),
    (t.prototype.$delete = P),
    (t.prototype.$watch = function(t, e, n) {
      var r = this;
      if (a(e)) return qt(r, t, e, n);
      (n = n || {}).user = !0;
      var o = new qr(r, t, e, n);
      return (
        n.immediate && e.call(r, o.value),
        function() {
          o.teardown();
        }
      );
    });
}
