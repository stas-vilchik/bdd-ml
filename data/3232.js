{
  var x = scale.scaleLog().range([
    {
      color: "red"
    },
    {
      color: "blue"
    }
  ]);
  test.deepEqual(x(5), {
    color: "rgb(77, 0, 178)"
  });
  x.range([["red"], ["blue"]]);
  test.deepEqual(x(5), ["rgb(77, 0, 178)"]);
  test.end();
}
