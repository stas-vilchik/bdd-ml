{
  r.prototype[e] = function(t, n, r) {
    return this.request(
      i.merge(r || {}, {
        method: e,
        url: t,
        data: n
      })
    );
  };
}
