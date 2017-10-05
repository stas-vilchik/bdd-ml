{
  for (var n = Object.create(null), r = t.split(","), i = 0; i < r.length; i++)
    n[r[i]] = !0;

  return e
    ? function(t) {
        return n[t.toLowerCase()];
      }
    : function(t) {
        return n[t];
      };
}
