{
  ("use strict");

  function r(e) {
    e.cancelToken && e.cancelToken.throwIfRequested();
  }

  var o = n(2),
    i = n(19),
    s = n(20),
    u = n(6);

  e.exports = function(e) {
    r(e),
      (e.headers = e.headers || {}),
      (e.data = i(e.data, e.headers, e.transformRequest)),
      (e.headers = o.merge(
        e.headers.common || {},
        e.headers[e.method] || {},
        e.headers || {}
      )),
      o.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function(t) {
          delete e.headers[t];
        }
      );
    var t = e.adapter || u.adapter;
    return t(e).then(
      function(t) {
        return r(e), (t.data = i(t.data, t.headers, e.transformResponse)), t;
      },
      function(t) {
        return (
          s(t) ||
            (r(e),
            t &&
              t.response &&
              (t.response.data = i(
                t.response.data,
                t.response.headers,
                e.transformResponse
              ))),
          Promise.reject(t)
        );
      }
    );
  };
}
