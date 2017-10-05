{
  var n = parseFloat(val);
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}
