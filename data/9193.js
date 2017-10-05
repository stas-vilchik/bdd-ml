{
  var n = e.indexOf("(");
  return n < 0
    ? '_f("' + e + '")(' + t + ")"
    : '_f("' + e.slice(0, n) + '")(' + t + "," + e.slice(n + 1);
}
