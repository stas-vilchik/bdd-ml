{
  var e = t.options;

  if (t.super) {
    var n = _e(t.super);

    if (n !== t.superOptions) {
      t.superOptions = n;
      var r = ge(t);
      r && y(t.extendOptions, r),
        (e = t.options = z(n, t.extendOptions)).name &&
          (e.components[e.name] = t);
    }
  }

  return e;
}
