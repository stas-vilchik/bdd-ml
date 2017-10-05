{
  r.prototype[e] = function(t, n) {
    return this.request(
      i.merge(n || {}, {
        method: e,
        url: t
      })
    );
  };
}
