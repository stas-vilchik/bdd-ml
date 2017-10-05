{
  var keys = "";
  var vals = 0;
  var obj = {
    b: 1,
    a: 2,
    r: 3
  };
  forEach(obj, function(v, k) {
    keys += k;
    vals += v;
  });
  expect(keys).toEqual("bar");
  expect(vals).toEqual(6);
}
