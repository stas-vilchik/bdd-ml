{
  var a, b, c, d;
  [...a] = [1, 2, 3];
  [b, ...c] = [1, 2, 3];
  [, , , ...d] = [1, 2, 3];
  return {
    a: a,
    b: b,
    c: c,
    d: d
  };
}