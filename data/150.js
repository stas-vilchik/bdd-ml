{
  function e(e, n) {
    "object" == typeof t[n] && "object" == typeof e
      ? (t[n] = x(t[n], e))
      : (t[n] = e);
  }

  for (var t = {}, n = 0, r = arguments.length; n < r; n++) g(arguments[n], e);

  return t;
}
