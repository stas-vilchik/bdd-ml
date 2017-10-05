{
  if (n) {
    var o = e,
      a = Ro;

    e = function(n) {
      null !== (1 === arguments.length ? o(n) : o.apply(null, arguments)) &&
        xn(t, e, r, a);
    };
  }

  Ro.addEventListener(
    t,
    e,
    Vi
      ? {
          capture: r,
          passive: i
        }
      : r
  );
}
