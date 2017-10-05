{
  if (!ji.test(t)) {
    var e = t.split(".");
    return function(t) {
      for (var n = 0; n < e.length; n++) {
        if (!t) return;
        t = t[e[n]];
      }

      return t;
    };
  }
}
