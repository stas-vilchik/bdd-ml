{
  var e = {},
    n = /;(?![^(]*\))/g,
    r = /:(.+)/;
  return (
    t.split(n).forEach(function(t) {
      if (t) {
        var n = t.split(r);
        n.length > 1 && (e[n[0].trim()] = n[1].trim());
      }
    }),
    e
  );
}
