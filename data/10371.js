{
  var e = Object.create(null);
  return function(n) {
    return e[n] || (e[n] = t(n));
  };
}
