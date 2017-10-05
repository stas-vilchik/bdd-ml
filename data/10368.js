{
  for (var n = Object.create(null), r = t.split(","), o = 0; o < r.length; o++)
    n[r[o]] = !0;

  return e
    ? function(t) {
        return n[t.toLowerCase()];
      }
    : function(t) {
        return n[t];
      };
}
