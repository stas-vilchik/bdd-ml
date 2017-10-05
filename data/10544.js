{
  if (n) {
    var i = e,
      a = ro;

    e = function(n) {
      null !== (1 === arguments.length ? i(n) : i.apply(null, arguments)) &&
        tn(t, e, r, a);
    };
  }

  ro.addEventListener(
    t,
    e,
    hr
      ? {
          capture: r,
          passive: o
        }
      : r
  );
}
