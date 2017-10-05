{
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
