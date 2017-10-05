{
  const a = 0,
    [b, { c, x: [d] }] = [
      1,
      {
        c: 2,
        x: [3]
      }
    ];
  var { x: [{ e }, f], g } = {
    x: [
      {
        e: 4
      },
      5
    ],
    g: 6
  };
  var { h } = {
      h: 7
    },
    { i } = {
      i: 8
    };
  return {
    a: a,
    b: b,
    c: c,
    d: d,
    e: e,
    f: f,
    g: g,
    h: h,
    i: i
  };
}
