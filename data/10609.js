{
  function t() {
    this.set = Object.create(null);
  }

  return (
    (t.prototype.has = function(t) {
      return !0 === this.set[t];
    }),
    (t.prototype.add = function(t) {
      this.set[t] = !0;
    }),
    (t.prototype.clear = function() {
      this.set = Object.create(null);
    }),
    t
  );
}
