{
  ("use strict");

  function r(e) {
    if ("function" != typeof e)
      throw new TypeError("executor must be a function.");
    var t;
    this.promise = new Promise(function(e) {
      t = e;
    });
    var n = this;
    e(function(e) {
      n.reason || ((n.reason = new o(e)), t(n.reason));
    });
  }

  var o = n(23);
  (r.prototype.throwIfRequested = function() {
    if (this.reason) throw this.reason;
  }),
    (r.source = function() {
      var e,
        t = new r(function(t) {
          e = t;
        });
      return {
        token: t,
        cancel: e
      };
    }),
    (e.exports = r);
}
