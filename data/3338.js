{
  var x = scale.scalePow().range(["red", "blue"]),
    y = x.copy(),
    i0 = x.interpolate(),
    i1 = function(a, b) {
      return function() {
        return b;
      };
    };

  x.interpolate(i1);
  test.equal(y.interpolate(), i0);
  test.equal(x(0.5), "blue");
  test.equal(y(0.5), "rgb(128, 0, 128)");
  test.end();
}
