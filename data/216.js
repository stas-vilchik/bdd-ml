{
  ("use strict");

  function r() {
    this.handlers = [];
  }

  var o = n(2);
  (r.prototype.use = function(e, t) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: t
      }),
      this.handlers.length - 1
    );
  }),
    (r.prototype.eject = function(e) {
      this.handlers[e] && (this.handlers[e] = null);
    }),
    (r.prototype.forEach = function(e) {
      o.forEach(this.handlers, function(t) {
        null !== t && e(t);
      });
    }),
    (e.exports = r);
}
