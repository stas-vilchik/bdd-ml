{
  $.cancelled ||
    (n.data.show ||
      ((a.parentNode._pending || (a.parentNode._pending = {}))[n.key] = n),
    v && v(a),
    b &&
      (hn(a, f),
      hn(a, d),
      vn(function() {
        hn(a, p),
          mn(a, f),
          $.cancelled || C || (wn(w) ? setTimeout($, w) : yn(a, u, $));
      })),
    h && h(a, $),
    b || C || $());
}
