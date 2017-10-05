{
  ("use strict");

  function r(e) {
    (this.defaults = e),
      (this.interceptors = {
        request: new s(),
        response: new s()
      });
  }

  var o = n(6),
    i = n(2),
    s = n(17),
    u = n(18),
    a = n(21),
    c = n(22);
  (r.prototype.request = function(e) {
    "string" == typeof e &&
      (e = i.merge(
        {
          url: arguments[0]
        },
        arguments[1]
      )),
      (e = i.merge(
        o,
        this.defaults,
        {
          method: "get"
        },
        e
      )),
      (e.method = e.method.toLowerCase()),
      e.baseURL && !a(e.url) && (e.url = c(e.baseURL, e.url));
    var t = [u, void 0],
      n = Promise.resolve(e);

    for (
      this.interceptors.request.forEach(function(e) {
        t.unshift(e.fulfilled, e.rejected);
      }),
        this.interceptors.response.forEach(function(e) {
          t.push(e.fulfilled, e.rejected);
        });
      t.length;

    )
      n = n.then(t.shift(), t.shift());

    return n;
  }),
    i.forEach(["delete", "get", "head", "options"], function(e) {
      r.prototype[e] = function(t, n) {
        return this.request(
          i.merge(n || {}, {
            method: e,
            url: t
          })
        );
      };
    }),
    i.forEach(["post", "put", "patch"], function(e) {
      r.prototype[e] = function(t, n, r) {
        return this.request(
          i.merge(r || {}, {
            method: e,
            url: t,
            data: n
          })
        );
      };
    }),
    (e.exports = r);
}
