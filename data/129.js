{
  ("use strict");

  function r(e) {
    var t = new s(e),
      n = i(s.prototype.request, t);
    return o.extend(n, s.prototype, t), o.extend(n, t), n;
  }

  var o = n(2),
    i = n(3),
    s = n(5),
    u = n(6),
    a = r(u);
  (a.Axios = s),
    (a.create = function(e) {
      return r(o.merge(u, e));
    }),
    (a.Cancel = n(23)),
    (a.CancelToken = n(24)),
    (a.isCancel = n(20)),
    (a.all = function(e) {
      return Promise.all(e);
    }),
    (a.spread = n(25)),
    (e.exports = a),
    (e.exports.default = a);
}
