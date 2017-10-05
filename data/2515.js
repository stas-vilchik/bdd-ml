{
  var a, b, c, d;
  ({ a, x: b, y: { c, z: [, d] } } = {
    a: 7,
    x: 8,
    y: {
      z: [10, 11, 12]
    }
  });
  return {
    a: a,
    b: b,
    c: c,
    d: d
  };
}
