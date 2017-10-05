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
    (t.prototype.$set = M),
    (t.prototype.$delete = I),
    (t.prototype.$watch = function(t, e, n) {
      var r = this;
      if (a(e)) return Jt(r, t, e, n);
      (n = n || {}).user = !0;
      var i = new $o(r, t, e, n);
      return (
        n.immediate && e.call(r, i.value),
        function() {
          i.teardown();
        }
      );
    });
}
