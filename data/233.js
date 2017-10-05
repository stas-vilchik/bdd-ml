{
  ("use strict");

  function n(e) {
    this.message = e;
  }

  (n.prototype.toString = function() {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }),
    (n.prototype.__CANCEL__ = !0),
    (e.exports = n);
}
