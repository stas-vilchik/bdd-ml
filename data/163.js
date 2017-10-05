{
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
}
