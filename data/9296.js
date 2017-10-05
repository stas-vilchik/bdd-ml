{
  var e = t.match(Es);

  if (e) {
    var n = {};
    return (
      e.forEach(function(t) {
        n[t.slice(1)] = !0;
      }),
      n
    );
  }
}
