{
  var e = t.directives;
  if (e)
    for (var n in e) {
      var r = e[n];
      "function" == typeof r &&
        (e[n] = {
          bind: r,
          update: r
        });
    }
}
